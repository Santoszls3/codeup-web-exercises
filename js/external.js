"use strict";

// This Says Hello in js console
console.log("Hello from external JavaScript");

// This will show an alert that say welcome
alert("Welcome to my Website!");

// prompt to determines users fav color
let userFavColor= prompt("What is your favorite color?");

// alert to acknowledge fav color
alert('Awesome, ' + userFavColor + ' is my favorite color as well!');
// can Also do this: alert('Cool, ${userFavColor} is my favorite color too!');


// This prompts the user for the rate they paid for the movie
let movieRate = prompt("What is the movie rate?");

// This prompts the user to input the amount of days they had the movie for
let mDays = prompt("How many days of The Little Meraid?");
let bDays = prompt("How many days of Brother Bear?");
let hDays = prompt("How many days of Hercules?");

// This adds the rate plus the days you worked
let total = (movieRate * mDays) + (movieRate * bDays) + (movieRate * hDays);

// This run the problem for you showing the total amount you earned
alert("Your total is: $" + total)



// This asks user how much they are getting paid by each company
let google =  prompt("What is your hourly rate for Google?", "400");
let amazon = prompt("What is your hourly rate for Amazon?", "380");
let facebook = prompt("What is your hourly rate for Facebook?", "350");


// This asks user how many hours they worked per company
let googleHours = prompt("How many hours did you work for Google this week", "6");
let amazonPay = prompt ("How many hours did you work for Amazon this week", "4");
let facebookPay = prompt("How many hours did you work for facebook this week", "10");

// This is the variable to multiply hour and pay and add all the companies you work for
let payCheck = (google * googleHours) + (amazon * amazonPay) + (facebook * facebookPay);

// this is the alert that tells  you the total paycheck
alert("You Check is: $" + payCheck)
