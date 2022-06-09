var h1=document.querySelector("h1");
var isRed=false;
h1.addEventListener("click", function(){
    h1.style.background= "red";
})
var btn1=document.getElementById("btnonly");
btn1.addEventListener("click", function(){
    if (isRed==false) {
        btn1.style.background= "red";
        isRed=true;    
    } else{
        btn1.style.background= "green";
        isRed=false;
    }
    
})

var btn2=document.getElementById("btnbdy");
btn2.addEventListener("click", function(){
    if (isRed==false) {
        document.body.style.background= "yellow";
        isRed=true;    
    } else{
        document.body.style.background= "purple";
        isRed=false;
    }
    
})