const newTask = document.querySelector("input[name=task]");
const tskList = document.getElementById("tasksList");
const addBtn = document.getElementById("addTaskButton");
const delBtn = document.getElementById("deleteTaskButton");
const myRegExp = /\W/;
let activLi;
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
    liNewTask.setAttribute("tabindex", "-1");
    liNewTask.tabIndex = 0;
    liNewTask.textContent = newTask.value;
    liNewTask.addEventListener("click", highlightElement);
    tskList.append(liNewTask);
    newTask.value = "";
    newTask.classList.remove("validTask");
    newTask.classList.add("emptyInput");
  }
  return;
}

function highlightElement(event) {
  activLi = event.target;
  activLi.classList.remove("taskElem");
  activLi.classList.add("highlightElem");
  activLi.addEventListener("blur", lostFocus);
}

function lostFocus(event) {
  event.target.classList.remove("highlightElem");
  event.target.classList.add("taskElem");
}

function delTask(event) {
  if (activLi) {
    activLi.remove();
    activLi = null;
  } else {
    throw new Error(alert("Choose task"));
  }
}

/* const divBlock = document.querySelectorAll(".changeColor");

for (let elem of divBlock) {
  elem.insertAdjacentHTML(
    "afterbegin",
    '<button class ="remove_elem">X</button>'
  );
  elem.firstChild.onclick = () => elem.remove();
  elem.addEventListener("click", changeColor1);
} */
