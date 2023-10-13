"use strict";


let favoriteColor = "green";
console.log(favoriteColor);

let instructorName = "David";
console.log(instructorName);

//Alert! - a pop-up message to teh user from Java Script
alert("Howdy from JavaScript!");

//we can concatenate inside of an Alert!
alert("Howdy from, " + instructorName);

//Confirm - a popup msg to teh user from JavaS, that has the ability to capture a boolean
let confirmed = confirm('We have lunch at 12:00 today?');
console.log(confirmed);
// prompt - a pop up msg to the usver from javaS that asks for a text value.
let userString= prompt("What is your favorite Basketball team?");
console.log(`Your favortie team is: ${userString}`);
