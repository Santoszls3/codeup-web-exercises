//1 When the user clicks the button with the id of change-heading, the content
// of the h1 element with the id of main-heading changes from DOM TO I control the DOM.
const mainHeader = document.getElementById('main-heading');
document.getElementById("change-heading").addEventListener("click", function (){
    mainHeader.innerHTML = "I control the DOM";
});


// 2 When the user clicks on the button with the id of getInput, the content of
// the input with the id of userInput shows up in the paragraph with the
// id of showInput.
let getInputButton = document.querySelector('#getInput');
let userInput = document.querySelector('#userInput');
let displayInput = document.querySelector('#showInput')
getInputButton.addEventListener('click', function (){
    displayInput.innerText = userInput.value;
});


// 3 When the user's mouse enters the section with the id of changes, all '
// 'the text in that section becomes color hotpink.
document.querySelector('#changes').addEventListener('mouseenter', (event) => {
    event.target.style.color = 'pink';
});


// 4 When the user's mouse enters the section with the id of serifChanger, the section '
// 'gets the class sans-serif added to it.
document.querySelector('#serifChanger').addEventListener('mouseenter', (event) => {
    event.target.style.fontFamily = 'sans-serif';
});


// 5 When the user clicks the button with the id of newParagraph, a paragraph
// identical to the first one (<p>Lorem ipsum dolor sit amet, consectetur
//     adipisicing elit. Assumenda enim hic illum impedit ipsa iure mollitia
//     nam possimus quae qui? Atque dolores laudantium, minus officiis pariatur
//     quo repellendus soluta ullam.</p>) is appended to the section with the id
// of moreParagraphs.

let newParagraphButton = document.querySelector('#newParagraph');
let newParSection = document.querySelector('#moreParagraphs');

newParagraphButton.addEventListener('click', function (){
    let newParagraph = newParSection.querySelector('p').cloneNode(true);
    newParSection.appendChild(newParagraph);
})


// 6 When the user's mouse enters the section with the id of big-and-small, the section gets '
// 'the class go-big toggled on if it's off and off if it's on.

let bigAndSmSec = document.querySelector('#big-and-small');

bigAndSmSec.addEventListener('mouseenter', function () {
    bigAndSmSec.classList.toggle('go-big');
});


// 7 Three seconds after the page loads, a paragraph with the content "Document Object Model"
// appears under the main heading in the header element.
let header = document.querySelector('header');
let headerParagraph = document.createElement('p');
headerParagraph.textContent = 'Document Object Model';
setTimeout(function (){
    header.appendChild(headerParagraph);
}, 3000);


// 8 When the user's mouse enters the Codeup logo, the image changes from img/logo.png to '
// 'img/OfficialCodeupLogo.png. Hint: modify the value of the src attribute.
document.querySelector('#image').addEventListener('mouseenter', (event) => {
    let codeupLogo = event.currentTarget.querySelector('img');
    codeupLogo.setAttribute('src', 'img/OfficialCodeupLogo.png');
});


// 9 When the user clicks on the last "Click Me" button, all the h2 elements in any
// section on the page start disappearing and reappearing every second.

let h2Elements = document.querySelectorAll('h2');




// 10 When the user clicks on a Click Me button, the text in the corresponding
// paragraph with the text "Change Me" changes to "You changed me!". For example,
// if the first button is clicked, the first paragraph changes. If the second paragraph
// is clicked, the second paragraph changes, and so forth.

let buttons = document.querySelectorAll('ul li button');
let paragraphs = document.querySelectorAll('section ul + ul li p');
buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        paragraphs[index].textContent = 'You changed me!';
    });
});