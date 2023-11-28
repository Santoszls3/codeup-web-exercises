/// while loops
let  i = 0;

while (i < 10); {
    console.log(`While loop iteration #` + i);
    i++;
})


// do while loops //
let i =10;

do {
    console.log('while loop itiration #' + i);
    i++
} while (i <10);

// common application
// let user response;
do {
    console.log("program running .....")
    userResponse = confirm('would you like to run the program again?')
}while(userResponse=== true);
