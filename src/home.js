import GHLogo from './assets/images/github_logo.png';
import { DisplayProjects, CreateProject, DeleteProject, AddListeners } from './../src/project.js';
import WipeHtml from './../src/wipeHtml.js';

const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.classList.add("github-logo");
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

// Make Home Layout

export default function createHome() {
    const functionBar = document.getElementById("function-bar");
    const functionList = [];

    WipeHtml();

    let createProject = document.createElement("p");
    createProject.classList.add("function");
    createProject.classList.add("createProject");
    createProject.textContent = "Create Project";

    createProject.addEventListener("click", function() {
        CreateProject();
        AddListeners();
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
        AddListeners();
        DisplayProjects();
    });  

    functionList.push(deleteProject);

    functionBar.style.gap = String(((100 / functionList.length) / functionList.length) + "%");

    functionBar.appendChild(deleteProject);

    const ghLink = document.querySelector(".github-link");
    ghLink.appendChild(githubLogo);
}