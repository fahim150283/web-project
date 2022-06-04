console.log("num between -10 to 19");
for (let i = -10; i < 20; i++) {
    console.log(i);
}

console.log("even num between -10 to 19");

for (let i = -10; i < 20; i++) {
    if(i%2==0){
        console.log(i);
    }
}

console.log("odd num between 300 to 333");

for (let i = 300; i < 334; i++) {
    if(i%2!=0){
        console.log(i);
    }
}

console.log("all num divisible by 5 & 3 between 5 to 50");

for (let i = 5; i < 51; i++) {
    if(i%5==0){
        if(i%3==0){
            console.log(i);
        }
    }
}