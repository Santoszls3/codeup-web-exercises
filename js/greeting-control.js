
import {getRandomGreeting} from "./greeting-logic.js";


function displayGreeting() {

    const userName = document.getElementById('name').value;

    // Call the greeting logic to get a random greeting
    const randomGreeting = getRandomGreeting();

    // Display the greeting message in the DOM
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.innerHTML = `<p>${randomGreeting}, ${userName}!</p>`;
}

document.getElementById('sub_button').addEventListener("click", displayGreeting);

