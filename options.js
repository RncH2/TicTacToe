const option=document.querySelector(".Options"),
 contentMenu=document.querySelector(".contentMenu"),
 select=document.getElementById("select"),
 menuDes=document.querySelector(".contetnS"),
 radios=document.getElementsByName("selectI"),
 radioPLayer=document.getElementById("r1"),
 radioBot=document.getElementById("r2"),
 iconOption=document.querySelector(".Menu li"),
 selectDificul=document.getElementById("selectDificul");
let p;
rP=2;
p=2;
radioBot.addEventListener("change",()=>{
    if(radioBot.checked==true){p=1; rP=1}
 })
 radioPLayer.addEventListener("change",()=>{
    if(radioPLayer.checked==true){p=2;rP=2;}
 })

option.addEventListener("click",(e)=>
{
    
    
    const displayContentMenu=window.getComputedStyle(document.querySelector(".contentMenu")).getPropertyValue("display");
    if(displayContentMenu=="none")
    {
       contentMenu.style.display="block" 
       iconOption.style.backgroundColor="#4ef2f5";
       iconOption.style.textShadow="1px 1px 15px #fff";
    }
    else{
        iconOption.style.backgroundColor="#ed668f";
        iconOption.style.textShadow="none";
        contentMenu.style.display="none";
        select.style.backgroundColor="#ed668f";
        select.style.textShadow="none";
        menuDes.style.display="none";
    } 
    
   e.preventDefault();
})

select.addEventListener("click",(e)=>{
    const displaySelect=window.getComputedStyle(document.querySelector(".contetnS")).getPropertyValue("display");
    if(displaySelect=="none")
    {
        select.style.backgroundColor="#4ef2f5";
        select.style.textShadow="1px 1px 15px #fff";
        
       menuDes.style.display="flex" 
    }
    else 
    {
        select.style.backgroundColor="#ed668f";
        select.style.textShadow="none";
        menuDes.style.display="none"
    }
    
    e.preventDefault();
})
selectDificul.addEventListener("click",(e)=>{
        alert("only extreme in this version")
e.preventDefault()
    });