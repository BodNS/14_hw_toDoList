const newTask = document.querySelector("input[name=task]");
const tskList = document.getElementById("tasksList");
const addBtn = document.getElementById("addTaskButton");
const delBtn = document.getElementById("deleteTaskButton");
let liTaskElem = document.querySelectorAll("taskElem");
const myRegExp = /\W/;
let isValid = false;

newTask.oninput = onInputHandler;
addBtn.addEventListener("click", addNewTask);
delBtn.addEventListener("click", delTask);



function onInputHandler(event) {
  if (!event.target.value) {
    event.target.classList.remove("validTask");
    event.target.classList.remove("invalidTask");
    event.target.classList.add("emptyInput");
} else {
 event.target.classList.remove("invalidTask");
  event.target.classList.remove("validTask");
  isValid = !myRegExp.test(event.target.value);
  event.target.classList.add(isValid ? "validTask" : "invalidTask");
}
}

function addNewTask(event) {
  if (newTask.value && isValid) {
    const liNewTask = document.createElement("li");
    liNewTask.classList.add("taskElem");
    liNewTask.textContent = newTask.value;
    tskList.append(liNewTask);
    newTask.value = "";
    newTask.classList.remove("validTask");
    newTask.classList.add("emptyInput");
  }
  return;
}

function highlightElement (event) {
event.target.classList.remove("taskElem");
    event.target.classList.add("highlightElem");
}

function delTask (event) {


}

function liMonitoring () {
  setInterval(() => {
    liTaskElem = document.querySelectorAll("taskElem");
for (let li of liTaskElem) {
  li.addEventListener("click", highlightElement);
}
  }, 1000);
}

liMonitoring (); 
/* const divBlock = document.querySelectorAll(".changeColor");

for (let elem of divBlock) {
  elem.insertAdjacentHTML(
    "afterbegin",
    '<button class ="remove_elem">X</button>'
  );
  elem.firstChild.onclick = () => elem.remove();
  elem.addEventListener("click", changeColor1);
} */
