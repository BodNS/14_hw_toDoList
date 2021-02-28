"use strict";
import * as Create from "./create.js";

export const newTask = document.querySelector("input[name=task]");
const tskList = document.getElementById("tasksList");
const addBtn = document.getElementById("addTaskButton");
const delBtn = document.getElementById("deleteTaskButton");
let checkboxLiNewTask;
const myRegExp = /\W/;

// let activLi;
let isValid = false;

newTask.oninput = onInputHandler;
addBtn.addEventListener("click", addNewTask);
delBtn.addEventListener("click", delTask);

//валидация введенного задания
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
    const liNewTask = Create.createLiNewTask();
    checkboxLiNewTask = Create.createCheckboxLiNewTask();
    tskList.append(liNewTask);
    liNewTask.append(checkboxLiNewTask);
    liNewTask.append(Create.createLabel());
    liNewTask.append(Create.createP());
    checkboxLiNewTask.addEventListener("click", highlightElement);
    newTask.value = "";
    newTask.classList.remove("validTask");
    newTask.classList.add("emptyInput");
  }
  return;
}

function delTask(event) {
  let checkBox = document.querySelectorAll("input:checked");
  if (checkBox.length) {
    checkBox.forEach((e) => e.parentNode.remove());
  } else {
    throw new Error(alert("Choose task"));
  }
}

//выделение элемента списка
function highlightElement(event) {
  if (checkboxLiNewTask.checked) {
    this.parentNode.classList.remove("taskElem");
    this.parentNode.classList.add("highlightElem");
  } else {
    this.parentNode.classList.remove("highlightElem");
    this.parentNode.classList.add("taskElem");
  }
  /* checkboxLiNewTask.removeEventListener("click", highlightElement);
  checkboxLiNewTask.addEventListener("click", lostFocus); */
}
/*
function lostFocus(event) {
  this.parentNode.classList.remove("highlightElem");
  this.parentNode.classList.add("taskElem");
  checkboxLiNewTask.removeEventListener("click", lostFocus);
  checkboxLiNewTask.addEventListener("click", highlightElement);
} */
