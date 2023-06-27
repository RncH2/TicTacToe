function writeBot(bots, players) {
  let r;
  let co = 0;
  
  for (let i = 0; i < win.length; i++) {
    a = win[i][0];
    b = win[i][1];
    c = win[i][2];
    if (
      btnCasillas[a].innerHTML == btnCasillas[b].innerHTML &&
      btnCasillas[a].innerHTML == bots &&
      btnCasillas[c].innerHTML == ""
    ) {
      btnCasillas[c].style.color = colorWrite;
      btnCasillas[c].innerHTML = bots;
      break;
    } else if (
      btnCasillas[b].innerHTML == btnCasillas[c].innerHTML &&
      btnCasillas[b].innerHTML == bots &&
      btnCasillas[a].innerHTML == ""
    ) {
      btnCasillas[a].style.color = colorWrite;
      btnCasillas[a].innerHTML = bots;
      break;
    } else if (
      btnCasillas[a].innerHTML == btnCasillas[c].innerHTML &&
      btnCasillas[c].innerHTML == bots &&
      btnCasillas[b].innerHTML == ""
    ) {
      btnCasillas[b].style.color = colorWrite;
      btnCasillas[b].innerHTML = bots;
      break;
    } else {
      co++;
    }
  }
  if (co == 8) {
    for (let i = 0; i < win.length; i++) {
      a = win[i][0];
      b = win[i][1];
      c = win[i][2];
      if (
        btnCasillas[a].innerHTML == btnCasillas[b].innerHTML &&
        btnCasillas[a].innerHTML == players &&
        btnCasillas[c].innerHTML == ""
      ) {
        btnCasillas[c].style.color = colorWrite;
        btnCasillas[c].innerHTML = bots;
        break;
      } else if (
        btnCasillas[b].innerHTML == btnCasillas[c].innerHTML &&
        btnCasillas[b].innerHTML == players &&
        btnCasillas[a].innerHTML == ""
      ) {
        btnCasillas[a].style.color = colorWrite;
        btnCasillas[a].innerHTML = bots;
        break;
      } else if (
        btnCasillas[a].innerHTML == btnCasillas[c].innerHTML &&
        btnCasillas[c].innerHTML == players &&
        btnCasillas[b].innerHTML == ""
      ) {
        btnCasillas[b].style.color = colorWrite;
        btnCasillas[b].innerHTML = bots;
        break;
      } else {
        co++;
      }
    }
  }

  if (co == 16) {
    do {
      
     
      if(empese==true){
        r=4
        
        if(btnCasillas[4].innerHTML== bots){
        
          if(btnCasillas[0].innerHTML==players)
          {
            if(btnCasillas[5].innerHTML!="")lateral=7
            else lateral=5
             
          }else if(btnCasillas[2].innerHTML==players)
          {
            if(btnCasillas[3].innerHTML!="")lateral=7
            else lateral=3
          }else if(btnCasillas[6].innerHTML==players)
          {
            
            if(btnCasillas[5].innerHTML!="")lateral=1
            else lateral=5
          }else if(btnCasillas[8].innerHTML==players)
          {
            if(btnCasillas[1].innerHTML!="")lateral=3
            else lateral=1
          }else
          {
            var s = [0, 2, 6, 8];
             lateral = s[Math.floor(Math.random() * s.length)];
           
            
          }
          r=lateral
         
          empese=false
        }else if(btnCasillas[4].innerHTML==players){
          empese=false
        }
       
       
         
      }else{
        var p = [0, 2, 6, 8];
        r = p[Math.floor(Math.random() * p.length)];
      
        
      }
      
    } while (btnCasillas[r].innerHTML != "");
    
    btnCasillas[r].style.color = colorWrite;
    btnCasillas[r].innerHTML = bots;
  }
}
