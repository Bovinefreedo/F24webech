/* 
1. (4pt) Hvilke statements relaterer sig IKKE til et objekt?
• let person = ”Thomas”; 
• const person = { name: ”Thomas” };<--
• person.name;<--
• const person = [ (...) ]; 
*/ 

/* (6pt) Giv et bud på hvordan constructoren kunne være defineret ud fra denne
instantiering:



• Svar:
 */ 


function ClothingItem(meterial, color){
    this.meterial = meterial;
    this.color = color;
}
const cloak = new ClothingItem("wool", "blue");
//console.log(cloak.meterial, cloak.color)

/* function Clothingiteam(material,color){
    this.material=material;
    this.color= color;
} */

 let countries = ["Denmark", "Marocco", "Sweden", "Norway", "China", "Peru"]

/* for(let i in countries){
    console.log(i);
} */

/* (4pt) Hvilke logiske udsagn er sande?
• 42 == ”42”
• !false || false
• !true && false */



//5. (5pt) Skriv et udtryk, som kan bruges til at skrive tallet 74 ud fra følgende array

countries.forEach((v,n)=>{
    console.log(countries[n])


})


/* 
4pt) Hvilke udsagn er sande om arrays:
• array.length == 0 er sandt for et tomt array
• array[array.length] er et udtryk for værdien på den sidste plads i
arrayet
• array[0] er et udtryk for værdien på den første plads i arrayet
 */



/* 
(4pt) Hvilket logisk udtryk returnerer true når :
let x = [”frugt”, ”grønt”, ”kød”]

    (0 < x.length && x[1] == ”kød”) && x.length === 3

    (x.length < 10 && x[0] > 5 || x.length % 2 === 0) || x.length == "3" 
*
console.log()
*/

/* data.sort(function(a, b){
   return a[1] - b[1];
}); */
/* function searchName(seachString, array){


let i = o; 
while (i < item.lenght){
    let item = document.getElementsByTagName
    if(items[i].innerHTML === seachString){
        console.log(i)
    }
}


} */


/* 6pt) giv et bud på hvordan en constructor-function kunne se ud til flg object literal:
const shape = {type: ”square”, width: 2, height: 2,
colour: ”#fff000”};
• 
Svar: */



const shape0 = {type: "square", width: 2, height: 2, colour: "#fff000"};


function Shape1 (type, width, height, color){
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
}
let shape2 = new Shape1("rectangle", 4, 1, "green");

function shape( type, width, height, colour) {
    this.type=type;
    this.width=width;
    this.height=height;
    this.colour=colour;
}

//const person = { name: "Frank", age: 37}

//stuff.objects[3].age 


/* 6. (6pt) Skriv et for-loop hvor som løber fra 0-9 og som skriver hvert tredje tal ud i
konsollen
• Svar:
 */

/* for(i = 0; i < 10; i = i + 3){
    console.log(i)
}





    
    for(let i=0; i<10; i+=3){
        console.log(i)
    }

for(let i = 0; i<10; i++){
    if(i % 3 === 0){console.log(i)};
} */

/*  
4pt) Hvilke udsagn er sande om metoder:
• Metoder er funktioner inden i objekter
• Metoder er funktioner uden for objekter
• Metoder har altid en parameterliste
*/

let dog = { walk: ()=>{console.log("i am walking")}}
dog.walk();

function Dog(){
    this.walk = function (){
        console.log("I am walking");
        return this;
    }
}



const dog2 = new Dog();

dog2.walk().walk().walk()

/* (4pt) Hvilket logisk udtryk returnerer true når :
let x = [”frugt”, ”grønt”, ”kød”, ”fisk”]
• (5 < x.length && x[0] == ”kød”) || x.length > 3
• (x.length < 10 && x[0] != 5 && x.length % 2 === 0)
|| x.length === 42
 */

/* 9. (4pt) Hvad kræves der af en metode, hvis man skal kunne lave method-chaining på
den?
• Svar: */

/* 10. (4pt) Skriv hovedet til en funktion som skal lede efter et element i et array. Kald
derefter funktionen med de rette argumenter
NB: Skriv KUN hovedet, kroppen er ikke relevant her.
• Svar: */
function findCountry (country,array){
    
}
findCountry("Norge",countries)

/* 12. (6pt) Lav et object literal som indeholder noget metadata om objektet stuff. Det skal
hedde meta og indeholde: Antal properties i objektet og en oversigt over hver
propertys type
• Svar:
*/

/* const stuff = {
    People : [{
        name: "string",
        age: "number"
        }]
        ,
    keys : [{
        q: "number",
        a: "number"
    }],
    numbers : [numbers],
    names : ["name"]
} */
const fruits = ["apple", "banana", "cherry"];

function specificFruits (theFruit, array){
    for (let i = 0; i < array.length; i++){
    if (array[i] == theFruit) {
        console.log(array[i] + " er i arrayet")
    }
    }    
}

fruits.forEach((v)=>{
    if(v==="apple") {console.log(v)}
    else if (v=== "banana"){console.log(v)}
})



specificFruits ("banana", fruits);
//specificFruits ("Denmark", countries);





/* for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "cherry") {
    console.log(fruits[i].toUpperCase()); 
  }
} */
/* 
  stuff.people.forEach(function(person){
    console.log(person.name, person.age);
  });
 */
  
/*   (8pt) Skriv en funktion som kan vende et array om – dvs at der returneres et nyt
array men i omvendt rækkefølge. Nedenfor ses et skellet til det samt udfaldet:
• Svar:

 */

function invertArray(array){
    let newArray=[]
    for (let i = array.length-1; i>=0; i-=1){
        newArray.push(array[i]); 
    }
    return newArray
}

//console.log(invertArray(countries));

/* 17. (5pt) Skriv en funktion, som tager et array og en værdi mellem 0-2 (begge inkl) som
parametre. Hvis der gives 0 med skal det første element skrives ud til konsollen, hvis
der gives 2 med skal det sidste element skrives ud til konsollen og hvis der giver 1
med skal både det første og det sidste element skrives ud til konsollen:
• Svar:
 */ 

function printSomething(number, array){
    if(number === 0){console.log(array[0]);}
    else if(number === 1 ) {console.log(array[0], array[array.length-1])}
    else if(number === 2) {console.log(array[array.length-1])}
    else {console.log("please choose a number between 0 and 2")}
}

//printSomething(1, countries);
//printSomething(0, countries);
//printSomething(2, countries);
//printSomething("Denmark", countries)


/* 18. (5pt) Skriv et while-loop, som skriver 6-tabellen fra 1-60 ud i konsollen
• Svar:
 */


/* 19. (6pt) Skriv en constructor-function som repræsenterer en person. Man skal kunne
give navn og alder med.
Lav så en række person-objekter ud fra flg. to arrays, hvor navn på index 0 i det ene
svarer til alder på index 0 i det andet:
 */

let names = ["Hans", "Peter", "Henrik", "Jens", "Lars", "Ole"]
let ages = [ 23, 34, 45, 56, 67, 78]

function Person(name, age){
    this.name=name;
    this.age=age;
}

let persons = [];
for(let i=0; i<names.length; i=i+1){
    let person = new Person(names[i],ages[i]);
    persons[i] = person;
}

console.log(persons[3].name,persons[3].age)
 



let i = 0;

while (i < 61) {
    console.log(i);
    i = i + 6;
}


/* function person(name, age){
   this.name = name; 
   this.age = age;
}
for (let i = 0; i< names.length; i++ ){
    let personArray = [];
    console.log(name[i], age[i]);
} */