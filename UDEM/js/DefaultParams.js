//******************** new way to do stuff

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// } This is the old way of writing this, the new way is below

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greets(person, msg = "Hey there",){
    console.log(`${msg}, ${person}!`)
}// even though the default msg is at the end, when you run greets("Tom") in console it will
// display as ******* Hey there, Tom! ******


//****************
// spread syntax is three dots ex: math.max(...nums)
const nums = [13, 2, 5, 69, 32, 789, 67, 34, 79, 92, 9873]

// this is what you will get console.log(...nums)
// 1 13 2 5 69 32 789 67 34 79 92 9873

const roosters = ["Fancy", "Scotty", "Patron"]
const dogs = ["Lobo","Bear", "Dakota", "Willow",]

const allPets = [...roosters, ...dogs] // this will add both const together in console

// ***************** rest
// the arguments object will automatically hold all the arguments passed to your function
//This function takes any number of arguments and gathers them into an array called
// numberz using the rest parameter syntax. Then, it simply logs the array numberz to
// the console. This function doesn't actually compute the sum of the numbers; it merely
// collects them into an array for further processing if needed.
function sum(...numberz){
    console.log(numberz)
}
function raceResults(gold, silver, ... everyoneElse){
    console.log(`Gold goes to: ${gold}`)
    console.log(`Silver goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}
//This function expects at least two arguments (gold and silver) and then collects
// any additional arguments into an array called everyoneElse. It then logs the winners
// and any additional participants to the console.
//
// Here's how you might use these functions:
// raceResults("Usain Bolt", "Justin Gatlin", "Asafa Powell", "Yohan Blake", "Tyson Gay");
// // Logs:
// // Gold goes to: Usain Bolt
// // Silver goes to: Justin Gatlin
// // And thanks to everyone else: Asafa Powell,Yohan Blake,Tyson Gay

// In raceResults, the first two arguments are assigned to gold and silver,
// respectively, and any subsequent arguments are collected into the array everyoneElse.
// Finally, the function logs out the results in a formatted string.



//***************************** Object destructuring :
// destructuring is often used to get info out of an object
const user = {
    email: 'Santizl3@gmail.com',
    password: 'sCart999',
    firstName: 'Jimothy',
    lastName: 'Frost',
    born: '1999',
    city: 'San Franscisco',
    state: 'California',
}

const {email, firstName, lastName, city,} = user;
// this will allow us to type in console: email, and it will show the info on there
// if you want to rename something you can do the following
// const {born: BirthYear, died: deathYear} = user;
// the line above would change the listed items to the new names you gave them

//************************************************************************** querySelector Practice
//I've provided you with some simple markup in index.html.  Your task is to use querySelector
// and querySelectorAll to select some of those elements.
//
// Select all elements that have the class of "done" and save them in a variable called doneTodos.
//
// Select the one checkbox and save it in a variable called checkbox.
// Be careful, there is more than one input element on the page! You'll
// need to select using the type attribute. (if you can't remember the css attribute selector...
// google it! That's what I would do!)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// <body>
// <h1>Garden Todos</h1>
// <input type="text" placeholder="New Todo">
//     <ul>
//         <li>Start Seedlings</li>
//         <li className="done">Deadhead Zinnias</li>
//         <li className="done">Water Tomatoes</li>
//         <li className="done">Harvest Potatoes</li>
//         <li>Prune Roses</li>
//     </ul>
//     <label>Delete All</label>
//     <input type="checkbox" id="scales" name="scales" checked>

// const doneTodos = document.querySelectorAll('.done');
// const checkbox = document.querySelector('input[type="checkbox"]');




//Pickles Exercise  **********
// I've provided you with some basic markup in index.html
//
// Please use JavaScript to select the <span> element that currently reads "Delicious"
//
// Change its text to read "Disgusting" USING JAVASCRIPT. Even if you are a weirdo who
// likes pickles, please change the text to "Disgusting".
//
// Yes, you could cheat and just update the html file directly, but I hope you don't!
// The goal here is to practice using JavaScript to manipulate HTML.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// <!DOCTYPE html>
//
// <head>
// <title>Pickles</title>
// <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
// <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//
// </head>
//
// <body>
// <!--PLEASE LEAVE THIS LINE ALONE! MAKE YOUR CHANGES USING JAVASCRIPT!!-->
// <h1>Pickles Are <span>Delicious</span></h1>
//@@@@@@@@
// <script>
//     document.querySelector('span').innerText = 'Disgusting';
// </script>
// </body>
//
// </html>


//Manipulating Attributes Practice
// Let's get some practice working with DOM element attributes. I've provided you with some very basic
// markup.  Please select the image element and:
//
// change its source to this url: https://devsprouthosting.com/images/chicken.jpg
//
// change its alt text to be "chicken"
//@@@@@@@@@@@@@@@
const eggImg = document.querySelector('img');
eggImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
eggImg.alt = 'chicken';


//****************************** i love trees
//
// Magical Forest Circle Exercise
// I've provided you with some basic markup in index.html.  Please do not change
// any of the markup directly.  Instead, use JavaScript to make the following changes:
//
// Select the div with the id of container.  Using JavaScript, set it's text
// alignment to 'center';
//
// Select the image and use JavaScript to give it a width of 150px and a
// radius of 50%
//
// Remember to use camelCased property names in JavaScript! (backgroundColor,
// not background-color, etc.)



const container = document.querySelector('#container');
container.style.textAlign = 'center';

const image = document.querySelector('#tree');
image.style.width = '150px';
image.style.borderRadius = '50%';


//******************** Rainbow
// I've provided you with an <h1> element which contains 7 individual ' +
// 'spans (each holding a single letter).
//
// Please write some JavaScript to make them rainbow-colored!
//
//     In app.js you'll find an array of color names called colors.  ' +
// 'It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].
//
// Your task is to select all spans, iterate over them, and
// assign them each one of the colors from the colors array.  The first span should
// be red, the second should be orange, etc.   Your result should look like this:

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
for (let i = 0; i < spans.length; i++){
    spans[i].style.color = colors[i];
}

//******************************** highlight get Every other

//In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them.
//
// Please use JavaScript and the classList property to invert which elements have the highlight class.
//
// Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.
// Your end result should look like this:

const lis = document.querySelectorAll('li');

for (let li of lis){
    li.classList.toggle('highlight');
}

//SOLUTION #2 (app.js):
//
// const lis = document.querySelectorAll('li')
//
// for (let li of lis) {
//   if (li.classList.contains('highlight')) {
//     li.classList.remove('highlight');
//   } else {
//     li.classList.add('highlight');
//   }
// }


//********************************************** 100 buttons
// 100 Button Insanity Exercise
// Without touching index.html, please use JavaScript to create exactly 100 new
// button elements! Add each new button inside the container element provided in index.html.
// Unfortunately, Udemy's exercise tool does not support to the append method, so you will
// need to use appendChild.  Here are the steps:
//
// Create exactly 100 new button elements
//
// Each button must have some text inside of it (it doesn't matter what)
//
// Each button must be appended inside the container div.
//
const containerButtons = document.querySelector('#containerButtons');
for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button');
    btn.innerText = 'Slip';
    containerButtons.appendChild(btn);
}

// *************************
// Let's get some practice using addEventListener. I've provided you with two
// buttons, each with an id: 'hello' and 'goodbye'.  Your goal is to add a click
// listener to each button.
//
// When the hello button is clicked, you should console.log "hello"
//
// When the goodbye button is clicked, you should console.log "goodbye"

const helloButton = document.querySelector('#hello');
helloButton.addEventListener('click', function () {
    console.log('hello');
});


document.querySelector('#goodbye').onclick =() => {
    console.log("goodbye")

}
