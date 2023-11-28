"use strict"

let cheeses = ["Cheddar", "Guda", "Swiss"];
console.log (cheeses [1]); // this will print the second element in cheese array
console.log(cheeses [2]);

console.log()

//creat a loop to print all of our cheeses to the consoel
for (const x of cheeses){
    console.log(x);
}

// spread operator   console.log(...cheeses);