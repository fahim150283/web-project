var p1=document.getElementById("player1");
var reset=document.getElementById("reset");
var p2=document.getElementById("player2");
var numinput=document.querySelector("input[type='number']");
var p1score=0;
var p2score=0;
var winscore=10;
var gameover=false;
var p1span=document.querySelector("#p1span");
var p2span=document.querySelector("#p2span");
var winscoredisplay=document.getElementById("setscore");

p1.addEventListener("click",function () {
    if (gameover!=true) {
        p1score++;    
        if (p1score==winscore) {
            p1span.classList.add("winner");
            gameover=true;
        }
        p1span.textContent=p1score;
    }
});

p2.addEventListener("click",function () {
   if (gameover!=true) {
        p2score++;
        p2span.textContent=p2score;
        if (p2score==winscore) {
            p2span.classList.add("winner");
            gameover=true;
        }
         
    }
});

reset.addEventListener("click",function () {
    p1score=0;
    p1span.textContent=p1score;
    p2score=0;
    p2span.textContent=p2score;
    gameover=false;
    p1span.classList.remove("winner");
    p2span.classList.remove("winner");
});

numinput.addEventListener("change",function () {
    winscoredisplay.textContent=numinput.value;
    winscore=numinput.value;
})