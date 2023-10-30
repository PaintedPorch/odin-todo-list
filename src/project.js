import FolderStartingImage from "./assets/images/empty-folder.jpg";
import FolderHoverImage from "./assets/images/empty-folder-open.png";
import WipeHtml from "./../src/wipeHtml.js";

const projectList = [];
const projectDivList = [];
let projectCounter = 0;

class Project {
	constructor(title="blank", todos=[], todoDivs=[] , projectNumber=undefined) {
		this.title = title;
		this.todos = todos;
		this.todoDivs = todoDivs;
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

export function CreateProject(projectTitle="DEFAULT", todos=[], todoDivs=[]) {
	if (projectCounter <= 7) {
		projectTitle = prompt("What is the project's title?");
		
		if (projectTitle != "DEFAULT") {
			let project = new Project(projectTitle, todos, todoDivs, projectNumber);
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
			alert("'DEFAULT' cannot be used as a project's name.");
		}
	}
	else {
		alert("You have reached the maximum amount of projects. Delete at least one project to continue.");
	}
}

function CreateDefaultProject(projectTitle="DEFAULT", todos=[]) {
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

let currentProject;

export function DeleteProject() {
	let projectBar = document.getElementById("project-bar");
	projectBar.innerHTML = "";

	let projectToDelete = "";
	projectToDelete = prompt("What is the project's title?");

	for (let i = 0; i < projectList.length; i++) {
		if (projectToDelete.toLowerCase() == (projectList[i].title).toLowerCase()) {
			if (projectToDelete.toLowerCase() == "default")
			{
				alert("You cannot delete the 'DEFAULT' project.");
			}
			else if (projectToDelete.toLowerCase() == "null") {
				alert("The project's name cannot be empty.");
			}
			else {
				projectList.splice((i), 1);
				projectDivList.splice((i), 1);
			}
		}
	}

	projectCounter--;
}

export function AddListeners() { 
	for (let i = 1; i < projectDivList.length; i++) {
		projectDivList[i].addEventListener("click", function() {
			currentProject = projectList[i];
			CreateTodoScreen();
			DisplayTodos();
		});
	}
}

export function ShowDefaultProject() {
	CreateDefaultProject();
	DisplayProjects();
	AddListeners();
}

/* 

TODO CODE 

*/

export class Todo {
	constructor(title="blank", textContent="blank") {
		this.title = title;
		this.textContent = textContent;
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
        DisplayTodos();
    });

    functionList.push(createTodo);

    functionBar.appendChild(createTodo);

    let deleteTodo = document.createElement("p");
    deleteTodo.classList.add("function");
    deleteTodo.classList.add("deleteTodo");
    deleteTodo.textContent = "Delete Todo";

    deleteTodo.addEventListener("click", function() {
        // grab deletefunction
        DisplayTodos();
    });

    functionList.push(deleteTodo);

    functionBar.style.gap = String(((100 / functionList.length) / functionList.length) + "%");

    functionBar.appendChild(deleteTodo);
}

let todoNumber = 0;

// This function has the todo data, this works, this means that
// the creation of too many todoDivs is done in the CreateTodoDiv
// function and not here.

export function CreateTodo(todoTitle="", todoText="") {
	todoTitle = prompt("What is the todo's title?");
	todoText = prompt("What is the todo's text?");
		
	let todo = new Todo(todoTitle, todoText);
	currentProject.todos.push(todo);

	// Test if it's easier to have in one function

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo", String(`todo${todoNumber}`));

	let todoTitleElement = document.createElement("h3");
	todoTitleElement.classList.add("todoTitle");
	todoTitleElement.textContent = todoTitle;

	todoDiv.appendChild(todoTitleElement);

	let todoTextElement = document.createElement("p");
	todoTextElement.classList.add("todoText");
	todoTextElement.textContent = todoText;

	todoDiv.appendChild(todoTextElement);

	currentProject.todoDivs.push(todoDiv);

	todoNumber++;

	console.log("CurrentProject.todos:");
	console.log(currentProject.todos);
	console.log("CurrentProject.todoDivs:");
	console.log(currentProject.todoDivs);
}

// Due to fixes this is currently obsolete, it will be saved for 
// possible future use, which I hope won't apply

// function ClearDuplicates() {
// 	for (let i = 0; i < currentProject.todos.length; i++) {
// 		let title = currentProject.todos[i].title;
// 		for (let j = 0; j < currentProject.todos.length; j++) {
// 			if (title == currentProject.todos[j].title && title != currentProject.todos[i].title) {
// 				currentProject.todoDivs.splice(currentProject.todoDivs[j], 1);
// 				currentProject.todos.splice(currentProject.todos[j], 1);
// 			}
// 		}
// 		console.log("After Duplicates CurrentProject.todoDivs:");
// 		console.log(currentProject.todoDivs);
// 	}
// }

// This code executes n amount of times for the project's index,
// project[0] gets their todo display-code executed 
// projectList.length amount of times project[1] does n-1 times etc.

// Also, the last item in the projectList activates the loop's code
// twice, but it doesn't increment the timer, thus showing it only
// executes the loop twice, but not the function itself. Fix this
// and the error might be over. Try to fix this first.

// This code is the only one that calls CreateTodoDiv, let's keep
// it in mind.

function DisplayTodos() {
	let mainField = document.getElementById("main-field");

    for (let i = 0; i < currentProject.todoDivs.length; i++) {
		mainField.appendChild(currentProject.todoDivs[i]);
    }
}