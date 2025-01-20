function cambiarColorNegro(event) {
  event.target.style.backgroundColor = "black";
}

const divs = document.querySelectorAll(".color-box");

divs.forEach((div) => {
  div.addEventListener("click", cambiarColorNegro);
});
