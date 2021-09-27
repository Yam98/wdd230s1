//const copyrightyear = document.getElementById("copyrightyear");
//copyrightyear.textContent = new Date().getFullYear();

//there is a nother better way to select elemnts ftom another file is the step below)


document.getElementById("copyrightyear").textContent = new Date().getFullYear();

//document.querySelector("#copyrightyear").textContent = new Date().getFullYear();
document.querySelector("#lastupdated").textContent = `Last Updated: ${document.lastModified}`;