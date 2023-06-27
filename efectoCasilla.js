const PointVictoria=document.querySelector(".Point #victoria");
const PointDerrota=document.querySelector(".Point #derrota")
const PointTabla=document.querySelector(".Point #tabla");
const tablaPoint=document.querySelector(".cajaWD")

let ganEm = false;
const btnCasillas = document.querySelectorAll(".casilla");
btnCasillas[0].innerHTML;
btnCasillas.forEach((casilla) => {
  casilla.addEventListener("click", () => {
    if (player.turno == true && casilla.innerHTML == "") {
      casilla.style.color = colorWrite;
      casilla.innerHTML = write;
      ganaste(`<span class="spanW">Congratulations</span> you win`, colorWrite);
      cambio();
      turnoDe();
      player.turno = false;
      bot.turno = true;
      
    }
    setTimeout(() => {
      if (ganEm == false) {
        if (bot.turno == true) {
        
          writeBot(write,player.select);
          
          ganaste(`<span class="spanW">I exterminated</span> you HaHa`, colorWrite);
          
          cambio();
          turnoDe();
          player.turno = true;
          bot.turno = false;
        }
      }
    }, 1000);
  });
  casilla.addEventListener("mousedown", () => {
    casilla.classList.add("clickCasilla");
  });
  casilla.addEventListener("mouseup", () => {
    resetStyleBtn(casilla);
  });
  casilla.addEventListener("mouseover", () => {
    casilla.style.background = colorHover;
  });
  casilla.addEventListener("mouseout", () => {
    resetStyleBtn(casilla);
    casilla.style.background = "";
  });
});

function resetStyleBtn(casilla) {
  casilla.classList.remove("clickCasilla");
}
