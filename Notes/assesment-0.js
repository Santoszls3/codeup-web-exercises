//1
function isTrue(val){
    return val === true;
}

//2
function isFalse(val){
    return val === false;
}
//3
function not(val){
    return !val;
}

//4
function addOne(val){
    return parseFloat(val) + 1;
}

//5
function isEven(val){
    return parseFloat(Val) % 2 === 0
}

//6
const isIdentical = (val1, val2) => val1, === val2;

}

//7
const isEqual = (val1, val2) => val1, == val2;

//8
const or = (val1, val2) => val1, || val2;

//9
const and = (val1, val2) => val1, && val2;

//10
const concat = (val1, val2) => "" + val1, + val2;

//10 with function
function concatTwo(val1, val2){
    return"" + val1 + val2;
}



// 1 Rewrite the following using a for loop:
// //
// // var i = 0;
// // while (i <= 10) {
// //     console.log(i);
// //     i++;
// // }
// //
// // Answer:
// //     for (var i = 0; i <= 10; i++){
// //         console.log(i);
// //     }



//2 What does the following code output?
//
//     console.log(10 % 3);
// 3
//
// 3.3333333
//
// 0
//
// 1   Answer****

// Which of the following will evaluate to TRUE?
//
//     0
//
//     ""
//
// !!true           Answer
//
// Both 0 and ""


// What is a break used for? What does it do?
//
//     Stops the loop from continuing through its iterations     ***** Answer
//Explanation: after a break is reached, the loop stops and the code below the loop is ran
//


// Skips the rest of the current iteration in a loop
//
// skip a specified amount of iterations in a loop
//
// None of the above












// **************** ***************
//
// practice dom assessment


//1 When the box with the id of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'
document.querySelector('.dbl-click-box').addEventListener('dblclick', function (){
    alert('Box Double clicked');
});

// 2Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT:
// changes should be applied to the body of the HTML.
document.querySelector('#dark-mode-btn').addEventListener('click', function (){
    document.body.classList.toggle('dark-mode');
});

//3 When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it,
//     in lowercase, in the span with the id of lowercase (<span id="lowercase">).


// let upperSpan = document.querySelector('#uppercase');
// let lowerSpan = document.querySelector('#lowercase');
// upperSpan.addEventListener('mouseover', function () {
//     lowerSpan.innerText = upperSpan.innerText.toLocaleLowerCase();
// });
// upperSpan.addEventListener('mouseleave', function () {
//     lowerSpan.innerText = "";
// });

let uppercaseSpan = document.querySelector('#uppercase');
uppercaseSpan.addEventListener('mouseover', () => {
    uppercaseSpan.textContent = uppercaseSpan.textContent.toLowerCase();
});
uppercaseSpan.addEventListener('mouseout', () => {
    uppercaseSpan.textContent = uppercaseSpan.textContent.toUpperCase();
});

// 4 The span with an id of counter should increment by one every second.
let pageCounter = document.querySelector('#counter');
let seconds = 0;
setInterval(function (){
    seconds++;
    pageCounter.innerText = seconds;
}, 1000);

//
//5 When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed
// in the input field (<input id="characters">), and output each individual character as a separate list item
// within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.
//

document.querySelector('#list-chars-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let charactersInput = document.querySelector('#characters');
    let charactersList = document.querySelector('#characters-list');
    charactersList.innerHTML = ""; // Clear existing list items
    charactersInput.value.split('').forEach(function (char) {
        let listItem = document.createElement('li');
        listItem.innerText = char;
        charactersList.appendChild(listItem);
    });
});

//6 When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list item that
// has a class (<li class="animal-list-item">) should be concatenated to the list item that immediately follows it.
//
document.querySelector('#clean-animal-list-btn').addEventListener('click', function () {
    let animalListItems = document.querySelectorAll('.animal-list-item');
    animalListItems.forEach(function (item, index, array) {
        if (index % 2 === 0 && array[index + 1]) {
            array[index + 1].innerText = item.innerText + ' ' + array[index + 1].innerText;
            item.remove();
        }
    });
});

//7 When hovering over the divs within the div with a class of hidden-letters, a letter will become visible
// in a span within the div being hovered over.
let hiddenDivs = document.querySelectorAll('.hidden-letters div');
hiddenDivs.forEach(function (div) {
    div.addEventListener('mouseover', function () {
        let span = div.querySelector('span');
        span.style.visibility = 'visible';
    });
});
