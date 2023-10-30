"use strict"

// a variable is a container for storing data
// a variable behaves as if it was the value that it contains

// two steps:
// 1. Declaration  (var, let, const)
// 2. assignment   (= assignment operator )

let firstName = "Jenny"; // this is a string bc its in " between ";

let age = 21;// we set the variable to be age 21, "21" is a number data type.

let isStudent = true;// this is a boolean, booleans are either tru or false.

age = age + 1// this will add one to teh age of 21, making it 22 now

console.log("Hello", firstName); // this will print out the string of jenny
console.log('You are', age, 'years old'); // this will print the age.
console.log('Enrolled:', isStudent);
// if  you put "" it will print what is in the quotes: console.log("9898") will print 9898

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Are you enrolled? " + isStudent;
// this allows you to get this specific element on your HTML doc and will show it on the actually HTML


//  ********** Arithmetic expressions ******** //
// arithmatic expressions is a combination of
// operands (+ - * / %)
// That can be evaluated to a value
// ex: y = x + 5;

let students = 20
students = students + 1; // thi is the same thing as ***  students += 1;  *** can only use if you are reassigning the same variable
students = students - 1;// thi is the same thing as ***  students -= 1;  ***
students = students * 2;// thi is the same thing as ***  students *= 1;  ***
students = students / 2;// thi is the same thing as ***  students /= 1;  ***
students = students ** 2; // this is an exponent to raise to the power of...
let extraStudents = students % 3; // this gives you the remainder of any division, can use % to
// find if a number is even or odd if your console.log shows 1 we have an odd number if its 0 its even

console.log(students)
console.log(extraStudents)