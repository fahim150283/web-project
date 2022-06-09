function iseven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

function factorial(num){
    var x=1;
    for(let i=num; i>0; i--){
        x=x*i;
    }
    return x;
}


//double update