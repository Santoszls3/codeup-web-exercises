
// const textArea = document.querySelector("textarea");
// textArea.addEventListener("keyup", e => {
//     console.log(e);
// })
// keydown and keypress are similar, but if you hit the
// shift key if you hit any key that does not generate any
// character it will not log if you use Keypress, keydown will log any key

"use strict";


// Define the Konami Code sequence
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

// This keeps track of the user's entered keys
let enteredKeys = [];

document.addEventListener("keyup", event => {
    const key = event.key;
    enteredKeys.push(key); // This Adds the entered key to the array

    // The Below will Check if the entered keys match the KonamiCode sequence
    if (enteredKeys.join(" ") === konamiCode.join(" ")) {

        alert("Congrats! You have added 30 lives!"); //will Trigger the alert if your code is a match
        setTimeout(function () {
            document.querySelector("h1").innerText = "READY TO PLAY!";
        }, 2000);
            document.querySelector("h1").style.color = "red";
            document.querySelector("body").style.backgroundColor = "blue";
    }

    else {
        // If the sequence is not matched, keep only the last 10 keys (length of Konami Code)
        enteredKeys = enteredKeys.slice(-10);
        console.log("Entered keys:", enteredKeys.join(" "));
    }
});