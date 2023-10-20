"use strict"

// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a
// break statement to continue prompting the user if they enter invalid input.

let userInput;
    while(true) {
        userInput = parseFloat(prompt("Choose an Odd number between 1 and 50"));
        if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
            break;
        }
    }
    console.log(userInput);

// 3. Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

    for(let i = 1; i<= 50; i += 2){
        if (i === userInput) {
            console.log("We skip this bc it was the user input");
            continue;
        }
        console.log(`Here is an odd one: ${i}`);
    }

