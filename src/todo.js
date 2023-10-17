// 2 functions. One to switch to the todo environment (different)
// function options, no folder bar. This is done by resetting the
// Html in the function-bar and clearing the folder bar. 
// The second function should load the todo list part of the projects
// This can be done by making a todoDiv just like the project div
// with Html content that gets loaded. This should be based upon
// the project div's todo content.

import WipeHtml from "./../src/wipeHtml.js";

const todoDivList = [];
const todoList = [];

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

    let todo = new Todo(todoTitle, todoText);
    todoList.push(todo);

    // Dom Part Of Todo

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", String(`todo${todoNumber}`));

    let todoTitleElement = document.createElement("h3");
    todoTitleElement.classList.add("todoTitle");
    todoTitleElement.textContent = todoTitle;

    todoDiv.appendChild(todoTitleElement);

    let todoTextElement = document.createElement("p");
    todoTextElement.classList.add("todoText");
    todoTextElement.textContent = todoText;

    todoDiv.append(todoTextElement);

    todoDivList.push(todoDiv);

    todoNumber++;

    // Todo: append todo to todos of project
}

function DeleteTodo() {
    //
}

function DisplayTodos() {
    let mainField = document.getElementById("main-field");

    for (let i = 0; i < todoDivList.length; i++) {
        mainField.appendChild(todoDivList[i]);
    }

    // Todo: link to project's todos
}