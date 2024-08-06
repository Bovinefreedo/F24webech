//variabler - typer
let country = "danmark";
const isHungry = true;
let age = 3;
country = "Sweden";
let cities = ["Odense", "Viborg", "Skagen", "Helsingør", "København", "Dybøl", "Slice Town"];

//console.log(country);
//console.log(isHungry);
//console.log(age);
//console.log(cities[1]);

//loops
//Udskriv alle byer i konsolen, du må selv vælge dit loop.
for(let i=0; i<cities.length; i++){
    //console.log(cities[i]);
};

cities.forEach(city=>{
    //console.log(city)
})

for(let i in cities){
    //console.log(cities[i])
};

let i=0;
while(i<cities.length){
    //console.log(cities[i]);
    i++;
};

//arrays
let anwsers = [[13, false], [28, false], [42, true], [68, false]];

//console.log(anwsers[2][1])

//functions
//function der tager en liste af lister som anwsers og det nummer på listen vi gerne vil tjekke og sige om svaret er rigtigt.

function getAnwser(ting, tal){
    return ting[tal][1];
}

//console.log(getAnwser(anwsers, 0));

function nameOfMyFunction(parameter1, parameter2){
}

//en function der heder addTwoNumbers med parameterne number1 og number2, de skal ligges sammen og retuneres.

function addTwoNumbers(tal1,tal2){
    return tal1 + tal2
}
console.log(addTwoNumbers(37,32))
//objekter

const dog1={
    name:"bob",
    age:1,
    breed: "old english sheepdog"
};
console.log(dog1);

const dog2={
    name:"lonex",
    age:1.5,
    breed: "american golden"
}

function Dog(name, age, breed){
    let stamina = 100;
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.bork = () =>{
        if(stamina>0){
            console.log('BorkBork');
            stamina -= 20;
        }
        else {console.log("whimper")}
        return this;
    }
    this.chaseTail= () => {
        if(stamina>0){
            console.log('PantPant');
            stamina -= 30;
        }
        else {console.log("whimper")}
        return this;
    }
    this.sleep= () =>{
        stamina = 100;
        console.log("zzz")
        return this
    }
}

let dog3 = new Dog("bella", 7, "labradoodle")
let dog4 = new Dog("Francies", 12, "poodle")

//console.log(dog3,dog4)

//dog3.bork().bork().bork().chaseTail().chaseTail().bork().chaseTail().sleep().chaseTail().bork();

//objekter - constructors

//method chaining

//JSON notering





