// using Fetch API

// fetch("http://swapi.dev/api/people/1/")
// .then(res => {
//         console.log("RESOLVED!", res);
//         return res.json()
// })
//     .then( data => {
//         console.log(data);
//        return fetch("http://swapi.dev/api/people/2/");
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED!!");
//         return res.json();
//     })
//     .then( data => {
//     console.log(data);
//     return fetch("http://swapi.dev/api/people/2/");
// })
//     .catch(e => {
//         console.log("ERROR!", e);
//     });

// doing the same as above with sync
//  const loadStarWarsPeople = async () => {
//     try {
//      const res = await fetch("http://swapi.dev/api/people/1/");
//      const data = await res.json();
//      console.log(data);
//      const res2 = await fetch("http://swapi.dev/api/people/2/");
//      const data2 = await res2.json();
//      console.log(data2);
//     } catch (e) {
//         console.log("ERROR!!", e);
//     }
//  };
//
//  loadStarWarsPeople();

//  axios.get("http://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESPONSE: ", res);
// }) // this makes the request and parses teh Json
// .catch(e => {
//     console.log("ERROR!", e);
// });

//********************* the above refactored an an async function

const getStarWarP = async (id) => {
    try{
    const res = await axios.get(`http://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    } catch (e) {
        console.log("ERROR!!", e);
    }
};
getStarWarP(5);
getStarWarP(10);


// ************************************************** Jokes
// const jokes = document.querySelector('#jokes')
// const button = document.querySelector('button');
//
// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }
// const getDadJoke = async () =>{
//     try {
//         const config = {headers: { Accept: 'application/json'}}
//         const res = await axios.get('http://icanhazdadjoke.com/', config)
//         return res.data.joke;
//     } catch (e) {
//         return ("ERROR");
//     }
//
// }
// button.addEventListener("click", addNewJoke)



const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    const jokeTextNode = document.createTextNode(jokeText); // Create text node
    newLI.appendChild(jokeTextNode); // Append text node to list item
    jokes.appendChild(newLI); // Append list item to list
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('http://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.error("Error:", e);
        return "no jokes available! :("
    }
};

button.addEventListener("click", addNewJoke);