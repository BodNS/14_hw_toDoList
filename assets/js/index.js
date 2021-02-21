const newTask = document.querySelector("input[name=task]");
const tskList = document.getElementById("tasksList");
const addBtn = document.getElementById("addTaskButton");
const delBtn = document.getElementById("deleteTaskButton");
const myRegExp = /\W/;

newTask.oninput = onInputHandler;
addBtn.addEventListener("click", addNewTask);

function addNewTask(event) {
  if (newTask.value) {
    const liNewTask = document.createElement("li");
    liNewTask.classList.add("taskElem");
    liNewTask.textContent = newTask.value;
    tskList.append(liNewTask);
    newTask.value = "";
  }
  return;
}

function onInputHandler(event) {
  let isValid = !myRegExp.test(event.target.value);
  console.log(this.value);
  event.target.className = isValid ? "validTask" : "invalidTask";
}
