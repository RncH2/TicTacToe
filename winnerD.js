
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let a;
let b;
let c;
let empate = 0;
let t = `<h1 class="r">try <span class="spanW">again</span></h1>`;
let h1 = `<h1 class="r"><span class="spanW">Excelent</span></h1>`;

function ganaste(how, color) {
  for (let i = 0; i < win.length; i++) {
    a = win[i][0];
    b = win[i][1];
    c = win[i][2];
    if (
      btnCasillas[a].innerHTML == btnCasillas[b].innerHTML &&
      btnCasillas[b].innerHTML == btnCasillas[c].innerHTML &&
      btnCasillas[a].innerHTML != ""
    ) {
      
      textWinner(how, color);

      ganEm = true;
    } else {
      empate++;
      if (empate == 72) {
        textWinner(`<span class="spanW">The match</span> was tied`, color);

        ganEm = true;
      }
    }
  }
}
function textWinner(txt, c) {
 
 
  setTimeout(() => {
    
    seccWiner.style.color = c;
    btnCarga.style.color = c;
    seccGame.style.display = "none";
    
    seccWiner.style.display = "flex";
    seccWinerSpan.innerHTML = txt;
    
    if (seccWinerSpan.textContent == "Congratulations you win") {
      h12vdt.innerHTML=h1;
      victorias++;
      rP=2;
    } else if(seccWinerSpan.textContent=="I exterminated you HaHa") {
      derrotas++;
      rP=1;
      h12vdt.innerHTML=t;
      
      
    }else{
      tablas++;
      if(td==1)
      {
        rP=2
      }else
      {
        rP=1
      }
      h12vdt.innerHTML=t;
    }
    let spanWin=document.querySelector(".spanW")
    
    
    if (c == "#ed668f") {
      h12vdt.style.color="#4ef2f5";
      spanWin.style.color="#4ef2f5";
    } else {
      spanWin.style.color="#ed668f";
     
    }
    tablaCarga()
    
  }, 400);
}
function tablaCarga()
{
  PointVictoria.textContent=`.${victorias}`;
  PointDerrota.textContent=`.${derrotas}`;
  PointTabla.textContent=`.${tablas}`;

}