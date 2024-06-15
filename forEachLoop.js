/* let countries = ["Denmark", "Sweden", "Spain"];

countries.forEach((a,b,c)=>{
    console.log(a,b,c)
})


for(poul in countries){
    console.log(countries[poul]);
}

console.log(countries.sort()) */

/* 
const personData = {
    firstName: "Tony",
    lastName: "Truong",
    Age: 22
};
console.log(personData);

let person1 = {
    Name : "Sanaa",
    Age :25, 
    country:"Morokko",    
}
console.log(person1)

let person3 ={
    Name: "helena",
    Age: 21,
}
console.log(person3.Age + person1.Age)
const person2 = {
    name: "Victor",
    age: 25,
    gender: "female"
};
console.log(person2);
 */

/* function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const personNo1 = new Person ("Tony", 22, "Male");
console.log(personNo1);

function Car (model, productionYear, wheel) {
       this.model=model;
       this.productionYear=productionYear;
       this.wheel=wheel;
}
const car1= new Car ("Tesla",2022, 4);
console.log (car1);



function Person2(name,age){
    this.name = name;
    this.age = age;
}
const person1 = new Person2("Victor",30);
console.log(person1);

 */


function Person5 (name, age){
    this.name = name;
    this.age = age;
    this.walk = () => {
        console.log(name + " is walking")
        return this
    }
}

const person5 = new Person5("Sanaa",25);
console.log(person5.walk().walk().age);

const car = new Vehicle(4, 200, "benzin")

let names = ["Sanna", "Tony", "Frank", "Victor", "Hilina"]
let ages = [22, 25, 75, 14, 24]
let persons4 = [];
for (let i = 0; i < names.length; i++) {
    const person = new Person5(names[i], ages[i]);
    persons4.push(person);
    console.log(persons4[i].name, persons4[i].age);    
}

persons4.push(["thomas", 36])

console.log(persons4[5][0], persons4[5][1])

function findName(name, names){
for (let i = 0; i < names.length; i++) {
    if (names[i] === name) {
        console.log(names[i]);
        console.log (`Mit navn er ${names[i]} og er ${ages[i]} år gammel`);
    }
}
}
findName("Tony", names);

for ( let i = 1; i < 11; i++){
    console.log(i);
}

for(let i = 3; i <= 15; i = i + 3){
    console.log(i);
}

console.log("------")

for(let i=3; i<=17; i = i +3){
  console.log(i);  
}

for (let i = 0; i < 10; i++){
    if( i  %2 !== 0){
    console.log(i + " er ulige");
    }else {
    console.log(i + " er lige");
    }
}

for (let i = 0; i< countries.length; i++){
    console.log(countries[i]);
}

    
for(let i= 0; i < countries.length; i++) {
    console.log(countries[i]);
}

for(let i in countries){
    console.log(countries[i]);
}

console.log(persons4[4].name) 