"use strict";
// This Says Hello in js console
console.log("Hello from external JavaScript");

// This will show an alert that say welcome
alert("Welcome to my Website!");

let userFavColor= prompt("What is your favorite color?");
// proompt to dertrmine users fav color

alert('Awesome, ' + userFavColor + ' is my favorite color as well!');
// popup to acknowledge fav color

let mDays = 3;

let bDays = 5;

let hDays = 1;

mDays = prompt("How many days of The Little Meraid?");
bDays = prompt("How many days of The Little Brother Bear?");
hDays = prompt("How many days of The Little Hercules?");
let movieRate = prompt("What is the movie rate?");
let total = (movieRate * mDays) + (movieRate * bDays) + (movieRate * hDays);
alert("Your total is:" + total)


let google =  prompt("What is your hourly rate for Google?", "400");
let amazon = prompt("What is your hourly rate for Amazon?", "380");
let facebook = prompt("What is your hourly rate for Facebook?", "350");

let googleHours = prompt("How many hours did you work for Google this week", "6");
let amazonPay = prompt ("How many hours did you work for Amazon this week", "4");
let facebookPay = prompt("How many hours did you work for facebook this week", "10");

let payCheck = (google * googleHours) + (amazon * amazonPay) + (facebook * facebookPay);
alert("You Check is: $" + payCheck)
