let input = {
    status: 200,
    countryData: [["Skagen", "Denmark"], 
        ["Odense", "Denmark"],
        ["Paris", "France"],
        ["Munich", "Germany"],
        ["Berlin", "Germany"],
        ["New York", "USA"],
        ["Los Angeles", "USA"]

    ],
    dogs: [
        {name:"Bob", age:1, breed:"old english sheepdog"},
        {name:"Lonex", age:1.5, breed:"american golden"},
        {name: "Bella", age:7, breed:"labrador"},
        {name: "Francies", age:12, breed: "poodle"},
        {name: "Skipper", age:15, breed:"golden retriver"}
    ]
}

let input2 = {
    status: 404
}

//console.log(input2.status)

//Du skal skrive "poodle" i consolen
//console.log(input.dogs[3].breed)

//Skriv "Odense" i konsolen
//console.log(input.countryData[1][0])

//Skriv en function som siger den er valid hvis status er 200, det betyder at den skal retunere true, hvis ikke der står 200 skal der stå false. 

//console.log(isValid(input2))

function isValid(incomingData){
    if(200===incomingData.status){
        return true;
    }
    else{
        return false;
    }
}


//Lav en function der retunere alle landene
function printCountries(input){
    if(isValid(input)){
        let countries = [];
        input.countryData.forEach(data => {
            countries.push(data[1]);
        });
        return countries;
    }
    else{return "no valid input"}
}

//console.log(printCountries(input));
//console.log(printCountries(input2));


//Skriv en funktion som retunere navne på de byer der i det andet argument.


function citiesInCountry(input, country){
    let cities=[]; 
    input.countryData.forEach(data=>{
        if(country===data[1]){
            cities.push(data[0]);            
        }
    });
    return cities;
}

//console.log(citiesInCountry(input, "Denmark"))
//citiesInCountry(input, "England")

//Skriv en funktion som udskriver alle nave, og aldre på hundene i vores input.


function dogsNamesAge(input){
    for(let i=0; i<input.dogs.length; i++){
        console.log(input.dogs[i].name, input.dogs[i].age, input.dogs[i].breed);
    }
}

//dogsNamesAge(input)

///////////////////////////////////////////////////////////
//Større opgave////////////////////////////////////////////
///////////////////////////////////////////////////////////

//Lav en function der kan lave katte objekter, 
//Katten skal have 3 atributes 
//en kat har et navn, en alder og en farve
//Vores katte skal have 3 metoder disse metoder skal kunne method chaine (der skal kunne stå meow og purr purr, med kun en henvisning til objectet)
//meow, der skriver "meow" i consolen
//attack, der skriver "scratch scrach" i konsolen
//purr, der skriver "purr purr" i consolen".


//Bagefter skal du kunne instantiate en kat ved kald af funktionen
//Få skrevet, navn, alder og farve i consolen
//Du skal kunne lave en method chain ud fra din kat



///////////////////////////////////
//HUSK ALTID {} EFTER IF(){}, for(){}, fuction name(){}

// IF

// IF ELSE

// FUNCTION FIND i et array

let countries = ["Denmark", "Marocco", "Sweden", "Norway", "China", "Peru"]
let countries2 = ["Germany", "USA", "Norway", "Brazil", "Peru", "China", "Denmark"]

// skriv en function om et land er i et array

/* function findCountry2(country,array){
    array.forEach((c)=>{
        console.log(c,country, c===country)
        if(c === country){
            return country;
        }
    })
    return country + " is not in the array";
} */

//findCountry("Denmark",countries2);
//findCountry("USA",countries2);

//Mit country er en string og mit array er et array af strings
function findCountry (country, array){
    let countryFound = false
    array.forEach(function (c){
        if (c === country) {
            console.log(country + " is in the array")
            countryFound = true;
        }
    })
    if(!countryFound){console.log(country +" not here")} 
}

//findCountry("Norway", countries);
//findCountry("Russia", countries);

/* let names = ["Hans", "Peter", "Henrik", "Jens", "Lars", "Ole","Anders"];

let found = false;


for(let i = 0; i<names.length; i++){
    if (names[i]=== "Bent"){
        console.log("found name: " + names[i]);
        found = true;
    }
}
if(!found){console.log("Bent is not in the array")};
 */
//findCountry("Henrik", countries);
//console.log(names)
//names.sort()
//console.log(names)



function displayData(input){
    console.log("starting new list///////")
    for(let i=0; i<input.countryData.length; i++){
        console.log(input.countryData[i][0]);
    }
}

/* displayData(input);
input.countryData.sort(function(a,b){return a[0]-b[0]});
displayData(input);

foo.bar(9)
foo(input).bar(9)
array.sort()
addTwo(2)

function foo(anything){
    return {bar:(a)=>{}}
} */

        

function Cat(name,age,color,dog){

    this.name= name;
    this.age= age;
    this.color= color;
    this.dog = dog;
        
    this.meow= ()=>{
        console.log("meow")
        return this;
    };

    this.attack= ()=>{
        console.log(" scratch scratch");
        return this;
    };
    this.purr= ()=>{
        console.log("purr purr");
        return this;
    };

    this.giveDog = () =>{
        return this.dog
    }
}
        
let myCat= new Cat("Lily",2,"white", new Dog("bonny", 18, "Gadekryds"));
        
//console.log(myCat);
        
//myCat.meow().attack().purr().purr().meow().attack()

//console.log(myCat.name)

/* 1.	(6pt) giv et bud på hvordan en constructor-function kunne se ud til flg object literal:
 */
const shape = {type: "square", width: 2, height: 2, colour: "#fff000"};


function Shape(type,width,height,color){
    this.type=type;
    this.width=width;
    this.height=height;
    this.color=color;
}


let shape2 = new Shape("square", 2, 2, "#fff000");

//console.log(shape);
//console.log(shape2);
//stuff.objects[3].age

//6.	(6pt) Skriv et for-loop hvor som løber fra 0-9 og som skriver hvert tredje tal ud i konsollen

for(let i=0; i<10; i=i+3){
    //console.log(i);
}

//document.body.getElementsByClassName("Hilana").forEach()

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

//myCat.meow().attack().giveDog().chaseTail();

//10.	(4pt) Skriv hovedet til en funktion som skal lede efter et element i et array. Kald derefter funktionen med de rette argumenter

//function findElment(element,array){}
//findElement(856, studentIDs);
//findElement("apple",friuts);
//findElement(true, hasBroughtCake);

//let digit1 = encrypt(stuff.keys, 4)
//let digit2 = encrypt(stuff.keys, 2)

//stuff.people.forEach((a)=>{
//    FileList.innerHTML += "<p>" + a.name +"<p>"
//})

function invertArray(array){
    let newArray = [];
    for(let i=array.length-1; i>=0 ; i--){
        newArray.push(array[i]);
    }
    return newArray
}

console.log(countries2);
//console.log(invertArray(countries2));

//17. (5pt) Skriv en funktion, som tager et array og en værdi mellem 0-2 (begge inkl) som parametre. 
//Hvis der gives 0 med skal det første element skrives ud til konsollen, 
//hvis der gives 2 med skal det sidste element skrives ud til konsollen 
//og hvis der giver 1 med skal både det første og det sidste element skrives ud til konsollen: 

function betty(array,value){
    if (value===0){
        console.log(array[0])
    }  
    else if (value===2){
        console.log(array[array.length-1])
    }
    else if (value === 1){
        console.log(array[0], array[array.length-1])
    }

}

let tom = [];
//betty(countries2, 0);
//betty(countries2, 1);
//betty(countries2, 2);
//betty(countries2, 3);

//18.	(5pt) Skriv et while-loop, som skriver 6-tabellen fra 1-60 ud i konsollen

/* let i=6
while(i<61){
    console.log(i);
    i+=6
}

i=1
while(i<=60){
    if(i%6==0){
        console.log(i)
    }
    i++;
} */

//19.	 (6pt) Skriv en constructor-function som repræsenterer en person. Man skal kunne give navn og alder med.
//Lav så en række person-objekter ud fra flg. to arrays, hvor navn på index 0 i det ene svarer til alder på index 0 i det andet:
function person (name,age) {
    this.name= name;
    this.age=age; 
}

let names2 = ["Hans", "Peter", "Henrik", "Jens", "Lars", "Ole"];
let ages = [23, 34, 45, 56, 67, 78];

personList = [];
for(let i=0; i<names2.length; i++){
    let newPerson = new person(names2[i],ages[i]);
    personList.push(newPerson);
}

console.log(personList[2].name);


    