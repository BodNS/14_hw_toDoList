//выделение элемента списка
export function highlightElement(event) {
  const checkBoxChecked = document.querySelectorAll("input:checked");
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  if (checkBoxChecked) {
    setClassListTaskElem(checkBoxes);
    checkBoxChecked.forEach((e) => {
      e.parentNode.classList.remove("taskElem");
      e.parentNode.classList.add("highlightElem");
    });
  } else {
    setClassListTaskElem(checkBoxes);
  }
}

//устанавливаем класс неотмеченного чекбокса
function setClassListTaskElem(checkBoxes) {
  checkBoxes.forEach((e) => {
    e.parentNode.classList.remove("highlightElem");
    e.parentNode.classList.add("taskElem");
  });
}
