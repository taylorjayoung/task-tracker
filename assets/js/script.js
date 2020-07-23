var buttonEl = document.querySelector("#save-task");
buttonEl.addEventListener('click', createTaskHandler)

function createTaskHandler() {
    var tasksToDoEl = document.querySelector(".task-list");
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskName = document.getElementById('task-name')
    var taskDescription = document.getElementById('task-description')
    listItemEl.textContent = `${taskName}: taskDescription`;

    tasksToDoEl.appendChild(listItemEl);
  }