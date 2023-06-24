const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        let alertElement = document.createElement("div");
        alertElement.innerHTML = "Add a task!";
        alertElement.className = "alert";
        
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        
        document.body.appendChild(overlay);
        document.body.appendChild(alertElement);
        
        setTimeout(function() {
            alertElement.remove();
            overlay.remove();
        }, 500);
    }
    else {
        // Rest of the code remains the same
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();