let input = {
    status: 200,
    countryData: [["Skagen", "Denmark"], 
        ["Odense", "Denmark"],
        ["Paris", "France"],
        ["Munich", "Germany"],
        ["Berlin", "Germany"],
        ["New York", "USA"],
        ["Los Angeles, USA"]

    ],
    dogs: [{name:"Bob", age:1, breed:"old english sheepdog"},
        {name:"Lonex", age:1.5, breed:"american golden"},
        {name: "Bella", age:7, breed:"labrador"},
        {name: "Francies", age:12, breed: "poodle"},
        {name: "Skipper", age:15, breed:"golden retriver"}
    ]
}


//Skriv en function som siger den er valid hvis status er 200
isValid(input)

//Skriv en funktion som retunere navne på de byer der i det andet argument.
citiesInCountry(input, "Denmark")

//Skriv en funktion som udskriver alle nave, og aldre på hundene i vores input.
dogsNamesAge(input)