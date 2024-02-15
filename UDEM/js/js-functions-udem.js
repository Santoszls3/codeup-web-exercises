

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`)
}

function repeat(str, numTimes) {
    let result = '';
    for(let i= 0; i < numTimes; i++){
    result += str;
}
console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
        return x + y;
}


//Return Value Practice
// It's time to practice returning values from a
// function! Write a simple function multiply which
// accepts two numerical arguments and returns their
// product (multiply them together).  Make sure to return
// the value instead of printing it!
//
// multiply(2,3) // 6
// multiply(9,9) // 81
// DEFINE YOUR FUNCTION BELOW:
function multiply(x, y) {
    return x * y;
}


//isShortsWeather Function
// I often struggle to know whether I should wear
// shorts or pants on a given day. (this is a complete lie.
// It's really not that hard to decide.) Please help me
// decide by writing me a function called isShortsWeather.
//
// It should accept a single number argument, which
// we will call temperature(but you can name it whatever
// you want, of course).
//
// If temperature is greater than or equal to 75,
// return true.
//
// Otherwise, return false.
// isShortsWeather(80) //true
// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather (temp) {
    if (temp >= 75){
        return true;
    }
    else{
        return false;
    }
}




//Last Element Exercise
// Please write a function called lastElement which
// accepts a single array argument.  The function should
// return the last element of the array (without removing
// the element).  If the array is empty, the function
// should return null.
//
// lastElement([3,5,7]) //7
function lastElement(arr) {
    if (arr.length === 0) {
        return null
    }
    return arr[arr.length - 1];
}



//Capitalize Exercise
// Define a function called capitalize that accepts a
// string argument and returns a new string with the
// first letter capitalized (but the rest of the string
// unchanged).  For example:
//
// capitalize('eggplant') // "Eggplant"
// DEFINE YOUR FUNCTION BELOW:
function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);

}

//Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.
//
// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:
//
// You'll need a variable to keep track of the total.  It should start out as zero.
//
// Loop over the array and for each element, add it to the total variable.
//
// After you have added every number to total, return total.

// SOLUTION #1:
function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
// SOLUTION #2:
//
// function sumArray(nums) {
//     let total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i];
//     }
//     return total;
// }




//Days Of The Week Exercise
// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
//
// Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.
//
// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

// DEFINE YOUR FUNCTION BELOW:

//SOLUTION #1:
//
// function returnDay(num) {
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   if (num < 1 || num > 7) {
//     return null;
//   } else {
//     return days[num - 1];
//   }
// }
// SOLUTION #2:
//
// function returnDay(num) {
//   const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   if (num < 1 || num > 7) {
//     return null;
//   } else {
//     return days[num];
//   }
// }
// SOLUTION #3:
//
// function returnDay(num) {
//   if (num < 1 || num > 7) {
//     return null;
//   }
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   return days[num - 1];
// }
// SOLUTION #4:
//
// function returnDay(num) {
//   if (num >= 1 && num <= 7) {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     return days[num - 1];
//   }
//   return null;
// }
// SOLUTION #5:
//
// function returnDay(num) {
//   if (num < 1 || num > 7) {
//     return null;
//   }
//   const days = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
//   };
//   return days[num];
// }
// SOLUTION #6:
//
// function returnDay(num) {
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   const day = days[num - 1];
//   // Using the JavaScript ternary operator syntax
//   return day ? day : null;
// }
// SOLUTION #7:
//
// // A long approach:
// function returnDay(num) {
//   if (num < 1 || num > 7) {
//     return null;
//   } else if (num === 1) {
//     return ('Monday');
//   } else if (num === 2) {
//     return ('Tuesday');
//   } else if (num === 3) {
//     return ('Wednesday');
//   } else if (num === 4) {
//     return ('Thursday');
//   } else if (num === 5) {
//     return ('Friday');
//   } else if (num === 6) {
//     return ('Saturday');
//   } else if (num === 7) {
//     return ('Sunday');
//   }
// }
// SOLUTION #8:
//
// // A long approach with a switch statement
// function returnDay(num) {
//   switch (num) {
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saturday';
//     case 7:
//       return 'Sunday';
//     default:
//       return null;
//   }
// }

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    }
    return days[num - 1];

}

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Superman', 'Black Panther']
    function cryForHelp() {
        for(let hero of heroes){
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}

// Function Expression Exercise
// Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator.
//
// square(4) //16
// square(3) //9
const square = function(num) {
    return num * num;
}

//SOLUTION #2:
//
// const square = function (num) {
//   return Math.pow(num, 2);
// }
// SOLUTION #3:
//
// // note: the ** operator doesn't work on the Udemy coding exercise platform at the time of writing this
// const square = function (num) {
//   return num ** 2;
// }


//******************************************************************************************
// this allows you
//callTwice(func) function: This function takes another function func as an argument and calls it twice.
function callTwice(func) {
    func();
    func();
}


//callFiveTimes(f) function: This function takes another function f as an argument and calls it five times
// in a loop.
function callFiveTimes(f){
    for(let i = 0; i < 5; i++){
        f();
    }
}

//rollDie() function: This function simulates rolling a six-sided die. It generates a random number between
// 1 and 6 (inclusive) and logs it to the console.
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

//callFiveTimes(rollDie): This line calls the callFiveTimes function and passes rollDie as an argument.
// This means that rollDie will be called five times in total.
callFiveTimes(rollDie)
//**********************************************************************************************************


// Higher Order Functions :
// functions that operate on/with other functions They can:
// accept other functions as arguments and RETURN A FUNCTION

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function () {
            console.log("Congrats, I am a food function")
            console.log("YOU WIN A MILLION BUCKS!!")
        }
    } else {
        return function () {
            alert("YOU have been INFECTED BY THE ZOMBIE VIRUS!")
            alert("YOU WILL DIE AND REANIMATE!")
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc (0, 18);


// function isBetween(n){
//     return n >= 50 && n <= 100
// }
// function isBetween(n){
//     return n >= 50 && n <= 100
// }

//*****************************************************************
// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter
//
// area should accept the length of a side (all sides are the same in a square) and then return the side squared.
//
//     perimeter should accept the length of a side and return that side multiplied by 4.
//
// square.area(10) //100
// square.perimeter(10) //40
// SOLUTION #1:

const squares = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}
// SOLUTION #2:
//
// // More verbose syntax approach:
// const square = {
//     area: function (side) {
//         return side * side;
//     },
//     perimeter: function (side) {
//         return side * 4;
//     }
// }

const cat = {
    name: 'Blue Steele',
    color: 'Grey',
    breed: 'Scottish Fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`)
    }
}

//*********************************************************

//Define an object called hen.  It should have three properties:
//
// name should be set to 'Helen'
//
// eggCount should be set to 0
//
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.
//
// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

// SOLUTION #1:

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};
// SOLUTION #2:
//
// // A bit more verbose:
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg: function () {
//         this.eggCount += 1;
//         return 'EGG';
//     }
// };

function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e){
        console.log(e);
        console.log("please pass a string")
    }

}



try {
    hello.toUpperCase();
} catch {
    console.log("error")
}