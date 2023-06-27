const btnPlayer = document.querySelectorAll(".btnPlayer"),
  seccPlayerSelect = document.querySelector(".playerSelect"),
  seccGame = document.querySelector(".game"),
  seccWiner = document.querySelector(".winner"),
  seccWinerSpan = document.querySelector(".vdt"),
  btnCarga = document.querySelector(".carga"),
  btnContinuar=document.querySelector(".continuar"),
  h12vdt=document.querySelector(".h12vdt"),
  menu=document.querySelector(".Menu");
  
  let rP;
  let td;
  let empese=true;

btnPlayer.forEach((btnS) => {
  btnS.addEventListener("click",(e)=>
  {
    player.select = btnS.id;
    if (player.select == "X") {
      bot.select = "O";
    } else {
      bot.select = "X";
    }
    
     td=rP;
     seccPlayerSelect.style.display = "none";
     seccGame.style.display = "block";
    menu.style.display="none"
     tablaPoint.style.display="flex";
      PeG();
   
  });
   
  
});
function PeG()
{
  addT(player);
  turnoDe();

  if (rP == 1) {
    
    empese=false
    player.turno = false;
    bot.turno = true;
    cambio();
    turnoDe();
    writeBot(write, player.select);
    ganaste("", colorWrite);
    player.turno = true;
    bot.turno = false;
    cambio();
    turnoDe();
    
  }
  player.turno=true;
  bot.turno=false;
}