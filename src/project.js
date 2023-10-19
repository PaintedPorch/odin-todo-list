import FolderStartingImage from "./assets/images/empty-folder.jpg";
import FolderHoverImage from "./assets/images/empty-folder-open.png";
import WipeHtml from "./../src/wipeHtml.js";

const projectList = [];
const projectDivList = [];
let projectCounter = 0;

class Project {
	constructor(title="blank", todos=[], projectNumber=undefined) {
		this.title = title;
		this.todos = todos;
		this.projectNumber = projectNumber;
	}
}

export function DisplayProjects() {
	const projectBar = document.getElementById("project-bar");
	projectBar.style.gap = String(`${80 / projectDivList.length}%`);

	for (let i = 0; i < projectDivList.length; i++) {
		projectBar.appendChild(projectDivList[i]);
	}
}

let projectNumber = 0;

export function CreateProject(todos=[]) {
	if (projectCounter <= 7) {
		let projectTitle = prompt("What is the project's title?");

		let project = new Project(projectTitle, todos, projectNumber);
		projectList.push(project);

		// Dom Part Of Project

		const projectDiv = document.createElement("div");
		projectDiv.classList.add("project", String(`project${projectNumber}`));

		let projectImage = new Image();
		projectImage.src = FolderStartingImage;
		projectImage.classList.add("projectImage");

		projectDiv.appendChild(projectImage);

		let projectTitleElement = document.createElement("p");
		projectTitleElement.classList.add("projectTitle");
		projectTitleElement.textContent = project.title;

		projectDiv.append(projectTitleElement);

		projectDivList.push(projectDiv);

		projectNumber++;

		projectCounter++;
	}
	else {
		alert("You have reached the maximum amount of projects. Delete at least one project to continue.");
	}
}

export function DeleteProject() {
	let projectBar = document.getElementById("project-bar");
	projectBar.innerHTML = "";

	let projectToDelete = prompt("What is the project's title?");

	for (let i = 0; i < projectDivList.length; i++) {
		if (projectToDelete.toLowerCase() == (projectList[i].title).toLowerCase()) {
			projectList.splice((i), 1);
			projectDivList.splice((i), 1);
		}
	}

	projectCounter--;
}

let currentProject;

export function AddListeners() {
	for (let i = 0; i < projectDivList.length; i++) {
		projectDivList[i].addEventListener("click", function() {
			CreateTodoScreen();
			currentProject = projectList[i];
			DisplayTodos();
		});
	}
}

/* 

TODO CODE 

*/

const todoList = [];

export class Todo {
	constructor(title="blank", textContent="blank", domVersion="blank") {
		this.title = title;
		this.textContent = textContent;
		this.domVersion = domVersion;
	}
}

export function CreateTodoScreen() {
    const functionBar = document.getElementById("function-bar");
    const functionList = [];

    WipeHtml();

    let createTodo = document.createElement("p");
    createTodo.classList.add("function");
    createTodo.classList.add("createTodo");
    createTodo.textContent = "Create Todo";

    createTodo.addEventListener("click", function() {
        CreateTodo();
		CreateTodoScreen();
        DisplayTodos();
    });

    functionList.push(createTodo);

    functionBar.appendChild(createTodo);

    let deleteTodo = document.createElement("p");
    deleteTodo.classList.add("function");
    deleteTodo.classList.add("deleteTodo");
    deleteTodo.textContent = "Delete Todo";

    deleteTodo.addEventListener("click", function() {
        // grab 
    });

    functionList.push(deleteTodo);

    functionBar.style.gap = String(((100 / functionList.length) / functionList.length) + "%");

    functionBar.appendChild(deleteTodo);
}

let todoNumber = 0;

function CreateTodo() {
	let todoTitle = prompt("What is the todo's title?");
    let todoText = prompt("What is the todo's text content?");
    let domVersion = `<div class="todo ${String(`todo${todoNumber}`)}><h3 class="todoTitle>${todoTitle}</h3><p class="todoText">${todoText}</p></div>"`;

    todoNumber++;

    let todo = new Todo(todoTitle, todoText, domVersion);
	currentProject.todos.push(todo);

	todoList.push(todo);
}

function DeleteTodo() {
    //
}

function DisplayTodos() {
    let mainField = document.getElementById("main-field");

    for (let i = 0; i < todoList.length; i++) {
		if (currentProject.todos.length > 0) {
			const todoDiv = document.createElement("div");
			todoDiv.classList.add("todo", String(`todo${todoNumber}`));

			let todoTitleElement = document.createElement("h3");
			todoTitleElement.classList.add("todoTitle");
			todoTitleElement.textContent = currentProject.todos[i].title;

			todoDiv.appendChild(todoTitleElement);

			let todoTextElement = document.createElement("p");
			todoTextElement.classList.add("todoText");
			todoTextElement.textContent = currentProject.todos[i].textContent;

			todoDiv.appendChild(todoTextElement);

			mainField.appendChild(todoDiv);
		}
    }
}