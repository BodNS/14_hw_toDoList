"use strict";
import { newTask } from "./index.js";

//создание элемента списка
export function createLiNewTask() {
  const tempLiNewTask = document.createElement("li");
  tempLiNewTask.classList.add("taskElem");
  // tempLiNewTask.tabIndex = 0;
  // tempLiNewTask.textContent = newTask.value;
  return tempLiNewTask;
}

//создание чекбокса
export function createCheckboxLiNewTask() {
  const checkboxLiNewTask = document.createElement("input");
  checkboxLiNewTask.setAttribute("type", "checkbox");
  return checkboxLiNewTask;
}

//создание метки с текстом задания
export function createLabel() {
  const labelForChekbox = document.createElement("label");
  labelForChekbox.textContent = newTask.value;
  return labelForChekbox;
}

export function createP() {
  const pForTime = document.createElement("p");
  let taskDate = new Date().toLocaleTimeString();
  pForTime.textContent = taskDate;
  return pForTime;
}
