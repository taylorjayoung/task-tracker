var formEl = document.querySelector("#task-form");

function formHandler(createTaskHandler){
  event.preventDefault();
  var taskList = document.querySelector(".task-list");
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskDescriptionInput = document.querySelector("input[name='task-description']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  const taskObject = {'name': taskNameInput, 'description': taskDescriptionInput, 'type': taskTypeInput}

  createTaskHandler(taskList, taskObject)
}

function createTaskHandler(taskList,taskObject) {

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskObject.name + "</h3><p class='task-description>" + taskObject.description + "</p><span class='task-type'>" + taskObject.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    taskList.appendChild(listItemEl);    
  }

  formEl.addEventListener("submit", () => formHandler(createTaskHandler));
