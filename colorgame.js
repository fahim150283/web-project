var numsquares=6;
var colors=generateRandomColors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn"); 

colordisplay.textContent = pickedcolor;


easybtn.addEventListener("click",function () {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    h1.style.background="rgb(138, 168, 145)";
    numsquares=3;
    colors=generateRandomColors(numsquares);
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background= colors[i];    
        }else{
            squares[i].style.background="none"
        }
    }
});

hardbtn.addEventListener("click",function () {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    h1.style.background="rgb(138, 168, 145)";
    numsquares=6;
    colors=generateRandomColors(numsquares);
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background= colors[i];    
        squares[i].style.background="block";
    }
});


reset.addEventListener("click",function () {
    //generate new colors 
    colors=generateRandomColors(numsquares);
    //pick a new random color from array
    pickedcolor=pickColor();
    //change color display to match picked color
    colordisplay.textContent=pickedcolor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    messagedisplay.textContent="";
    h1.style.background="rgb(138, 168, 145)";
    reset.textContent="new colors";
})

for (var i = 0; i < squares.length; i++) {
    
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares   
    squares[i].addEventListener("click",function () {
       //grab color of picked square
        var clickedcolor =this.style.background;
       //compare color to picked color
       if (clickedcolor === pickedcolor) {
        messagedisplay.textContent="!!! CORRECT !!!";
        reset.textContent="PLAY AGAIN????";
        changeColors(clickedcolor);
        h1.style.background=clickedcolor;
        }else{
            this.style.background="rgb(0, 0, 0)";
            messagedisplay.textContent="Try Again!!!";
        }
        
    });
}


function changeColors(samecolor) {
    //loop through all the squares
    for (let i = 0; i < squares.length; i++){
    //change all the colors to match the color
    squares[i].style.background=samecolor; 
    console.log(samecolor);
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var array=[];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into array
        array.push(randomColor());
    }
    //return that array
    return array;
}


function randomColor() {
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return ("rgb("+r+", "+g+", "+b+")");
}

