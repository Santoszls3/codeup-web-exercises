
let gotMilk = false;

if (gotMilk === false){ // could also have condition of (!gotMilk)
    console.log("I'm headed out to H-E-B for some milk. Need anything else?")
}

let possibleFive = 5;
possibleFive = "5";
if (possibleFive === 5){
    console.log("Hey Thats Five");
}

function isItANumber(parameter){
    if (typeof parameter === "number") {
        return "That's a number!";
    } else {
        return "That's not a number...";
    }
}
console.log(isItANumber(5));
console.log(isItANumber(true));
console.log(isItANumber(3));

// "If I owned a cow id get my milk from my cow when I ran out, Since I don't, I'll go to the store instead."

// how would we rewrite this as an if/else code block?

let hasCow = false;
if (hasCow) {
    console.log("Going to go milk Bessie, BRB");
} else {
    console.log(" Well I need to go to Krogers for milk. BRB")
}

// if I had a cow Id milk the cow, if i had a goat id milk a goat , but since i dont have either
// ill go to the store instead.
let hasCowAgain = true;
let hasGoat = true;
if (hasGoat && hasCowAgain){
    console.log("well now I cant decide which one I want milk from...");
}
else if (hasCowAgain){
    console.log("Going to milk the cow, BRB");
} else if (hasGoat) {
    console.log("Going to go milk the goat, BRB");
} else {
    console.log("Going to The Walmart to get milk");
}


function isThisTen(val) {
    if(val === 10){
        return "Yes! you got 10"
    } else if(val > 10){
        return `NO! ${val} is more than 10...`;
    } else {
        return `Nope, ${val} is less than 10...`;
    }
}

console.log(isThisTen(35))
console.log(isThisTen(10))
console.log(isThisTen(5))


// ternary expression
let doWeHaveMilk = true
let action = (doWeHaveMilk) ? "I'm going to make a bowel of Cap Crunch !" : "Headed out to Randalls's, BRB";
console.log(action);

// **
function isItANumber(val){
    return (typeof val === "number") ? "That is a number!" : "That's not a number...";
}

// Switch Statement: a statement with multiple cases that will trigger based on the value of a variable.

let color = prompt("What is you favorite color?");

switch(color) {
    case "blue":
        alert("Wow that's my favorite color as well ");
        break;
    case "green":
        alert("Thats my second favorite color!");
        break;
    default:
        alert(color + " is a weird color, buddy!");
        break;
}


// how would you write this as a switch I dont ahve a cow, or a goat or a camel, I guess ill go to the store for milk

let animal = "gator";
switch (animal){
    case "cow":
        console.log("Milking cow");
        break;
    case "goat":
        console.log("Milk goat");
        break;
    case "camel":
        console.log("Milk Camel");
        break;
    default:
        console.log("Heading to Big Eagle for Milk...");
        break;
}

/** to do: lets make a switch statment witha prompt for the user to input their fav sandwich meat.
 * if they like olive loaf, we should return an alert to congratulat them, and if they like brisket we should
 * return " this is the correct and best answer"
 */

let meatOfChoice = prompt("what if your favorite lunch meat?")
switch (meatOfChoice){
    case "olive loaf":
}

