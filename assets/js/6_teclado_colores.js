const keyDiv = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      cambiarColor("pink");
      break;
    case "s":
      cambiarColor("orange");
      break;
    case "d":
      cambiarColor("lightblue");
      break;
    case "q":
      crearDiv("purple");
      break;
    case "w":
      crearDiv("gray");
      break;
    case "e":
      crearDiv("brown");
      break;
  }
});

function cambiarColor(color) {
  keyDiv.style.backgroundColor = color;
}

function crearDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
