/* 
This file appends projects to the project bar. A project is a 
constructor with a dictionary of todos inside. Upon loading all
project should be displayed in the project bar with the folder
image and their name. Upon being clicked this should change to 
display the content of the todo. A todo will consist of a title
displayed by default and content displayed on click. This is
regulated by a boolean variable within each todo.

A project should be appended to the list upon clicking "Create 
Project", this should then also rerender all project to the project-
bar. Clicking "Remove Project" should bring up a prompt that asks
for the name of the project to be deleted. This then deletes it
from the list and reloads the project-bar.

Since we generated the function for the menu in another JS file
we need to make an exportable function that activates in home.js.
This function should execute the above specifics upon clicking the
corresponding buttons. This means we need 2 functions to be exported.
One that takes our project list and appends one, then displays it
in the project bar, and one that deletes a project and displays all
remaining projects. These function will be named CreateProject and
DeleteProject respectively. 

The structure of this file has not yet been set on paper but the
projects should be a constructor that notes its name and an array
of todos. The todos should be a dictionary with their name, 
textContent and checkbox,
*/

import FolderStartingImage from "./assets/images/empty-folder.jpg";
import FolderHoverImage from "./assets/images/empty-folder-open.png";

const projectList = [];
const projectDivList = [];

// Find a way to make the project into a div which can contain
// its title and the folder image. 

class Project {
	constructor(title="blank", todos={}, projectNumber=undefined) {
		this.title = title;
		this.todos = todos;
		this.projectNumber = projectNumber;
	}
}

export function DisplayProjects() {
	const projectBar = document.getElementById("project-bar");
	projectBar.style.gap = String(`${100 / projectDivList.length}%`);

	for (let i = 0; i < projectDivList.length; i++) {
		projectBar.appendChild(projectDivList[i]);
	}
}

let projectNumber = 0;

export function CreateProject(todos={}) {
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
}

export function DeleteProject() {
	let projectBar = document.getElementById("project-bar");
	projectBar.innerHTML = "";

	let projectToDelete = prompt("What is the project's title?");

	for (let i = 0; i < projectDivList.length; i++) {
		if (projectToDelete.toLowerCase() == (projectList[i].title).toLowerCase()) {
			projectList.splice((i), 1);
			projectDivList.splice((i), 1);

			console.log(projectDivList,  " | ", projectList);
		}
	}
}

// Add event listener to all existing projects. This should load 
// 2 functions. One to switch to the todo environment (different)
// function options, no folder bar. This is done by resetting the
// Html in the function-bar and clearing the folder bar. 
// The second function should load the todo list part of the projects
// This can be done by making a todoDiv just like the project div
// with Html content that gets loaded. This should be based upon
// the project div's todo content.