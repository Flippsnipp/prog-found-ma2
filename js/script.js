/*
    PF Module Assignment 2
*/

// Level 1,1 Creating an Array with strings
var petArray = ["cat", "cow", "dog"];

// Level 1.2 Console log value
console.log(petArray[1]);

// Level 1.3 create a push to the existing array
petArray.push("sheep");

// Level 1.4 console using length method
console.log(petArray.length);

// Level 1.5 create an object with properties
var catObject = {
    name: "Sofus",
    colour: "Orange",
    age: 16
};

// Level 1.6 console logging the third value
console.log(catObject.age);

// Level 1.7 Creating an array out of object values
let catArray = [{
    name: "Sofus",
    colour: "Orange",
    age: 16
}];

// Level 1.8 Creating a Loop with the catArray values
for (let index = 0; index < catArray.length; index++) {
    console.log(catArray[0]);
    console.log(catArray[1]);
    console.log(catArray[2]);
}

// Level 1.9 Creating a function 
function logToConsole (funnyLooking) {
    console.log(funnyLooking);
}

// Level 1,10 Creating a value for function
var funnyLooking = "donkey";