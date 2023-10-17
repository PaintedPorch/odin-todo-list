import "./css/meyerReset.css";
import "./css/styles.css";
import CreateHome from "./../src/home.js";
import WipeHtml from "./../src/wipeHtml.js";
import { DisplayProjects } from "./../src/project.js";

// Since Home is the standard page on loading

let header = document.getElementById("header");
header.addEventListener("click", function() {
    CreateHome();
    DisplayProjects();
});

WipeHtml();
CreateHome();