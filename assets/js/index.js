"use strict";
import * as Create from "./create.js";
import { highlightElement } from "./hlLi.js";

export const newTask = document.querySelector("input[name=task]");
const tskList = document.getElementById("tasksList");
const addBtn = document.getElementById("addTaskButton");
const delBtn = document.getElementById("deleteTaskButton");
const myRegExp = /\W/;
let checkboxLiNewTask,
  isValid = false;

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
  const checkBox = document.querySelectorAll("input:checked");
  if (checkBox.length) {
    checkBox.forEach((e) => e.parentNode.remove());
  } else {
    throw new Error(alert("Choose task"));
  }
}
