//Hvad er en blok

//Hvad er et statement

function addTwo(number){
    return number+2;
}

let number = 0;
number = addTwo(number);
number = addTwo(number);
let question = false;

if(true){

}

for(let i = 0; i < 5 ; i++){

}

while(number<10 && question){
    console.log(number);
    number = addTwo(number);
}
console.log(number);


let i = 0;
while (i > 10){

i += 2; // i = i + 2;
}
5
const tallet = [4,22,0,322,2,42];
tallet[1] = 432;
/* console.log(tallet);
console.log(tallet[tallet.length-1])
console.log(tallet[tallet.length-1]) */

/* const doubles = [["man", 42,"boo"], ["women", 1337,"boo","boo"], ["undefined", 420]]

 
doubles.sort((a,b)=>{
    return a[0] - b[0]  }); 

console.log(doubles)

doubles.sort(function(a, b){return a[0] - b[0]});

console.log(doubles) */

function writeArray(array, klaus){
    if(klaus){
        console.log(array);
    }
    else {
        console.log(array[0],array[array.length-1])

    }
}

writeArray(tallet, false);
writeArray(tallet, true);

tallet.forEach((d,index,array)=>{
    console.log(d, array[index], index)
})