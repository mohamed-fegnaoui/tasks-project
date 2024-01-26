// setting up variables

let inputTask = document.querySelector(".add-task input");
let btnTask = document.querySelector(".plus");
let taskContainer = document.querySelector(".tasks-content");
let taskMgs = document.querySelector(".no-tasks-message");
let taskCount = document.querySelector(".tasks-count span");
let taskComplited = document.querySelector(".tasks-completed span");

window.onload = function () {
    inputTask.focus();
};

btnTask.addEventListener("click", addTask);

function addTask() {
    if (inputTask.value == "") {

    } else {
        let task = document.createElement("span");
        let taskName = document.createTextNode(inputTask.value);
        task.appendChild(taskName);
        let deleteBtn = document.createElement("span");
        let textDelete = document.createTextNode("delete");
        deleteBtn.appendChild(textDelete)
        deleteBtn.className = "delete";
        task.className = "task-box";
        task.appendChild(deleteBtn);
        taskContainer.appendChild(task);
        // alert msg sucsess 
        displayAlert("task has been added");
        inputTask.value = "";
        // envok the funtion for calculate 
        calcTsks();
    }
}

// function for delete task
taskContainer.onclick = function (e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        displayAlert("task has been removed");
        calcTsks();
    };
};

// function for alert msg
function displayAlert(text) {
    taskMgs.innerHTML = text;
    setTimeout(() => {
        if (taskContainer.childElementCount === 1) {
        displayAlert(" no task to show ");
    }
   },1000)
};

// function to calculate tasks
function calcTsks() {
    taskCount.innerHTML = taskContainer.childElementCount -1;
};







 
  











































































































    





















   


























