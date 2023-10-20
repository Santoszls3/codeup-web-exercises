"use strict";

//imeidatly invoded exposted function expression we need a (function)
(() => {
    console.log("javaScript still works");
    let aVariable = "you can't gete me from the console...";
})();
// the above code is called an iffy, it hides your code.

// 2. Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by
// the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
function showMultiplicationTable(number) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
showMultiplicationTable(7);
// this is a template literal (`${number} x ${i} = ${number * i}`);



// 3. Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console
// whether each number is odd or even. For example:

for (let i = 0; i <= 10; i++) {
    let randomNumbers = Math.floor(Math.random() * (200 - 20 + 1) + 20) ;
    if (randomNumbers % 2 === 0) {
        console.log(`${randomNumbers} is even.`);
    } else
        console.log(`${randomNumbers} is odd.`);
}

// 4. Create a for loop that uses console.log to create the output shown below.
for (let i = 1; i <= 9; i++) {
    let numStr = i.toString()
    console.log(numStr.repeat(i));
}


// Create a for loop that uses console.log to create the output shown below.

    for (let i = 100; i >= 1; i-=5){
        console.log(i);
    }