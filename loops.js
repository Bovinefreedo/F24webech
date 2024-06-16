let countries = ["Denmark", "Marocco", "Sweden", "Norway", "China", "Peru"]
let countries2 = ["Germany", "USA", "Norway", "Brazil", "Peru", "China", "Denmark"]

//Lav en funktion som kan tage et navn på et land og et array af lande, den skal kunne skrive X land er i arrayet i consolen

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

findCountry("Norway", countries);
findCountry("Russia", countries);

for (let i = 0; i < countries.length; i++){
    findCountry(countries[i], countries2);
}

//Opgave, udskriv alle navne på lande i contries i konsolen. Brug forEach loops
/* 
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
} */

/* countries.forEach(function(d, i, a){
    console.log(d, i, a);
}
);


countries.forEach(function(country){
    console.log(country);
}) */

// Hvis ikke vi finder landet skal der stå "landet" blev ikke foundet en gang 


/* let countries23 = ["Denmark", "Marocco", "Sweden", "Norway", "China", "Peru"]
let countries1 = ["Germany", "USA", "Norway", "Brazil", "Peru", "China", "Denmark"]
function searchCountry(array, country){
    let countryFound = false;
    for(let i in array){
        if(array[i]==country){
            console.log("we found the country " + array[i]);
            countryFound = true;
        }
    }
    if(!countryFound) {console.log(country + " not found")}
} */

/* searchCountry(countries, "Russia")
searchCountry(countries, "China")

for(let i=0; i<countries2.length; i++){
    searchCountry(countries, countries2[i]);
} */

/* function searchCountryTh(array, country){
    for(let i =0; i<array.length;i++){
        if(array[i] === country){
            console.log(country + " was found");
        } else{
            console.log("not on this index, try again");
        }
    }
}

for( let country of countries){
    console.log(country);
}
 */