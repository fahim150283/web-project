//create secrete number
var num=4;
//ask user for guess
var gnum=prompt("Guess A Number");
//check guess
if(gnum!=num){
    if(gnum<num){
        alert("BOO !!!"+"try bigger number");
    }
    else{
        alert("BOO !!!"+"try smaller number");
    }
}else{
    alert("congrats");
}

