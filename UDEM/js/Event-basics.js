const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    // you usually dont want to modify color properties in dom just doing it for simplicity.
    // the code below will give us a random rgb value to change the background color of the page
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor
})


const buttons2 = document.querySelectorAll('#button2 button'); // Select all buttons within the #button2 div

for(let button of buttons2){
    button.addEventListener('click', function () {
        // below will change the color of the button
        button.style.backgroundColor = makeRandomColor();
        // below will change the color of the font in the button
        button.style.color = makeRandomColor();
    });
}

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}


document.querySelector('button').addEventListener('click', function (evt){
    alert("click")
})

//Form Events Exercise
// Time to get some practice working with forms and form events! index.html already
// has a form element that contains two <input> elements, one for quantity and one for
// a product name.  index.html also contains an empty <ul> where you will append new <li>'s.
// Watch the gif at the bottom for an overview of how your code should work.
// Your task is to follow these steps:
// Listen for the form submission
// When the form is submitted, prevent the default behavior
// Grab the quantity input value and the product input value
// Create a new <li> element.  Set the text on the new <li> to
// include the quantity and product name from the form.
// Append the new <li> to the <ul> on the page
// Reset the inputs
// Please note:
// 1. Udemy's interface does not yet recognize some of the newer JS syntax, e.g., .append()
// You will need to use alternate (older) syntax for this method in order to get the tests to pass.
// 2. The form will need to be assigned to a variable named form for the test to pass, I've already
// included this line of code for you in the app.js code.

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addElement(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';
});

const addElement = (product, qty) => {
    const li = document.createElement('li');
    li.innerText = `${qty} ${product}`;
    list.appendChild(li);
}



//Input Event Practice
// It's time to practice working with the input event!  In the index.html file,
// you'll find an <h1> and an <input type="text"> element.  Please do not change
// anything in index.html!  In app.js, write code that meets these requirements:
//
// The h1 should start with the text "Enter Your Username" (I've done that for you,
// already in the markup)
//
// Whenever an input event is fired on the <input> element, update the <h1> so that it
// displays "Welcome, " plus the current value from the text input.  Take a look at the
// gif below to see how it should work.
//
// If the <input> goes back to being empty, update the <h1> so that it once again says
// "Enter Your Username"

const heading = document.querySelector('div > h2');
const input = document.querySelector('div > input[type="text"]');

input.addEventListener('input', function () {
    if (input.value === '') {
        heading.innerText = `Enter Your Username`
    } else {
        heading.innerText = `Welcome, ${input.value}`;
    }
});