export default function wipeHtml() {
    const functionBar = document.getElementById("function-bar");
    const projectBar = document.getElementById("project-bar");
    const mainField = document.getElementById("main-field");
    functionBar.innerHTML = "";
    projectBar.innerHTML = "";
    mainField.innerHTML = "";
}