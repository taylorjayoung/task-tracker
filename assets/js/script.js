var buttonEl = document.querySelector("#save-task");
buttonEl.addEventListener('click', createTaskHandler)

function createTaskHandler() {
    var tasksToDoEl = document.querySelector(".task-list");
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }