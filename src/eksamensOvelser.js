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

const person = { name: "Frank", age: 37}

//stuff.objects[3].age 


/* 6. (6pt) Skriv et for-loop hvor som løber fra 0-9 og som skriver hvert tredje tal ud i
konsollen
• Svar:
 */

for(i = 0; i < 10; i = i + 3){
    console.log(i)
}





    
    for(let i=0; i<10; i+=3){
        console.log(i)
    }

for(let i = 0; i<10; i++){
    if(i % 3 === 0){console.log(i)};
}