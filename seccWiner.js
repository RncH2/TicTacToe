btnContinuar.addEventListener("click",(e)=>
{
  
  seccWiner.style.display = "none";
  tablaPoint.style.display="flex";
  resetBasic();
  PeG();
   
 
     
tablaCarga()
  seccGame.style.display="flex";
  td=rP
})
btnCarga.addEventListener("click", (e) => {
  tablaPoint.style.display="none";
  seccWiner.style.display = "none";
  seccPlayerSelect.style.display = "block";

  contentMenu.style.display="none";
menuDes.style.display="none";
rP=p;
  victorias=0;
  derrotas=0;
  tablas=0;
  resetBasic();
  tablaCarga()
  
  
  player.turno=true;
  bot.turno=false;
 
 
  e.preventDefault()
});

function resetBasic()
{
  empate=0;
  ganEm=false;
  empese=true;
  btnCasillas.forEach((casilla) => {
    casilla.innerHTML = "";
    casilla.style.color="transparent";

  });
}
