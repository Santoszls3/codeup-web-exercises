import {getRandomNumber} from "./number-utils.js";

// Below is an array of greeting the control will randomly pull from
const greetings =
    [
            "Hello",
            "Hi",
            "Hey there",
            "Greetings",
            "Salutations",
            "Howdy",
            "Yo",
            "Bonjour",
            "Hola",
            "Ciao",
            "Namaste",
            "G'day",
            "What's up",
            "Sup",
            "How's it going",
            "Nice to meet you",
            "Welcome",
            "Hey",
            "How are you",
            "Pleased to meet you"
    ];

export function getRandomGreeting() {
    return greetings[getRandomNumber(greetings.length)];
}