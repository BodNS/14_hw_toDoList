/*var rect = document.getElementById("rect");

rect.addEventListener("click", function (e) {
  alert(e.type);
});
*/ /*
//поменять цвет div по клику
const divBlock = document.querySelectorAll(".changeColor");

for (let i of divBlock) {
  i.addEventListener("click", changeColor1);
}

function changeColor1(event) {
  event.target.style.backgroundColor = "red";
  event.target.addEventListener("click", changeColor2);
}

function changeColor2(event) {
  event.target.style.backgroundColor = "green";
  event.target.removeEventListener("click", changeColor2);
  event.target.addEventListener("click", changeColor1);
}
*/
//поменять цвет div по клику + удалитьэлемент
const divBlock = document.querySelectorAll(".changeColor");

for (let elem of divBlock) {
  elem.insertAdjacentHTML(
    "afterbegin",
    '<button class ="remove_elem">X</button>'
  );
  elem.firstChild.onclick = () => elem.remove();
  elem.addEventListener("click", changeColor1);
}

function changeColor1(event) {
  event.target.style.backgroundColor = "red";
  event.target.addEventListener("click", changeColor2);
}

function changeColor2(event) {
  event.target.style.backgroundColor = "green";
  event.target.removeEventListener("click", changeColor2);
  event.target.addEventListener("click", changeColor1);
}
