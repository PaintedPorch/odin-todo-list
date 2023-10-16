import GHLogo from './assets/images/github_logo.png';
import { DisplayProjects, CreateProject, DeleteProject } from './../src/project.js';

const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.classList.add("github-logo");
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

// Make Home Layout

export default function createHome() {
    const functionBar = document.getElementById("function-bar");
    const functionList = [];

    let createProject = document.createElement("p");
    createProject.classList.add("function");
    createProject.classList.add("createProject");
    createProject.textContent = "Create Project";

    createProject.addEventListener("click", function() {
        CreateProject();
        DisplayProjects();
    }); 

    functionList.push(createProject);

    functionBar.appendChild(createProject);

    let deleteProject = document.createElement("p");
    deleteProject.classList.add("function");
    deleteProject.classList.add("deleteProject");
    deleteProject.textContent = "Delete Project";

    deleteProject.addEventListener("click", function() {
        DeleteProject();
        DisplayProjects();
    });  

    functionList.push(deleteProject);

    functionBar.style.gap = String(((100 / functionList.length) / functionList.length) + "%");

    functionBar.appendChild(deleteProject);

    const ghLink = document.querySelector(".github-link");
    ghLink.appendChild(githubLogo);
}

/*
<div id="grid-container">
        <div id="function-bar">
            <!-- Generate in JS
        Whilst in home: Create Project, Delete Project, Rename Project
        </div>
        <div id="project-bar"></div>
        <div id="main-field"></div>
    </div>
*/