const contentTurno = document.querySelector(".content-turno");

let turnoX;
let turnoO;
let colorHover;
let colorWrite;
let write;

function cambio() {
  if (turnoX == true) {
    turnoX = false;
    turnoO = true;
  } else {
    turnoO = false;
    turnoX = true;
  }
}
function turnoDe() {
  if (turnoX == true) {
    contentTurno.style.setProperty("--before-translateX", "-50%");
    contentTurno.style.setProperty(
      "--before-colorB",
      "linear-gradient(45deg,#ed668f,transparent)"
    );
    colorHover = "radial-gradient(transparent, #ed668f)";
    colorWrite = "#ed668f";
    write = "X";
  } else {
    
    contentTurno.style.setProperty("--before-translateX", "50%");
    contentTurno.style.setProperty(
      "--before-colorB",
      "linear-gradient(45deg,#0ccccf,transparent)"
    );
    colorHover = "radial-gradient(transparent, #0ccccf)";
    colorWrite = "#4ef2f5";
    write = "O";
  }
}
function addT(q) {
  if (q.select == "X") {
    turnoX = true;
  } else {
    turnoX = false;
  }

  if (q.select == "O") {
    turnoO = true;
  } else {
    turnoO = false;
  }
}
