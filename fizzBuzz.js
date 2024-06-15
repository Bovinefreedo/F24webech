function printN(n){
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}

for(let i=0; i<10; i++){
    if(i%3 === 0){console.log(i)}
    else if(i%5 == 0){console.log(i)};
}

function FizzBuzz(n){
    for(let i=1 ; i<=n ; i++){
        anwser = "";
        if(i%3 === 0){anwser += "Fizz"};
        if(i%5 == 0){anwser += "Buzz"};
        if(anwser === ""){anwser = i}
        console.log(anwser);
    }
}

FizzBuzz(15)