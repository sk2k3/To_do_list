/*
const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask(){ 
    if(inputBox.value === ''){ 
        alert("You must write something!");
    }
    else{ 
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li); 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
    }
    inputBox.value=""; 
    saveData(); 
}

listContainer.addEventListener("click", function(e){ 
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){ 
        e.target.parentElement.remove();
        saveData();
    }
}, false); 

function saveData(){ 
    localStorage.setItem("data", listContainer.innerHTML); 
}
function showTask(){ 
    listContainer.innerHTML = localStorage.getItem("data"); 
}

showTask();
*/ 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value}`;
        listContainer.appendChild(li);

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.className = "edit";
        li.appendChild(editButton);

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        li.appendChild(deleteButton);

        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.className === "edit") {
        let li = e.target.parentElement;
        let taskText = li.childNodes[0].nodeValue.trim();
        inputBox.value = taskText;
        li.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    if (listContainer.innerHTML === null) {
        listContainer.innerHTML = "";
    }
}

showTask();
