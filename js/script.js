/*
    PF Module Assignment 2
*/

// Level 1,1 Initialising an Array with strings
var petArray = ["cat", "cow", "dog"];

// Level 1.2 Output value
console.log(petArray[1]);

// Level 1.3 create a push to the existing array
petArray.push("sheep");

// Level 1.4 Output using length method
console.log(petArray.length);

// Level 1.5 create an object with properties
var catObject = {
    name: "Sofus", //string
    colour: "Orange", //string
    age: 16 //number
};

// Level 1.6 console logging the third value
console.log(catObject.age);

// Level 1.7 Creating an array out of object values
var catArray = [{
    name: "Sofus", 
    colour: "Orange", 
    age: 16 
}];

// Level 1.8 Creating a Loop with the catArray values
for (var index = 0; index < catArray.length; index++) {
    console.log(catArray[index].name);
    console.log(catArray[index].colour);
    console.log(catArray[index].age);
}

// Level 1.9 Creating a function 
function logToConsole (infoToLog) {
    console.log(infoToLog);
}

// Level 1,10 Creating a value for function
var funnyLooking = "donkey";
logToConsole(funnyLooking);

