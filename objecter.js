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
    dogs: [{name:"Bob", age:1, breed:"old english sheepdog"},
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