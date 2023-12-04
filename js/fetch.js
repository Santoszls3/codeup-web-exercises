
//
// fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
// function getGithubUsernames() {
//     return fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
//         .then(response => response.json())
// }
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj);
//     });
// }).catch(error => console.error(error))


// fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
// function getGithubUsernames(username) {
//     return fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
//         .then(response => response.json());
//
// }
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj);
//     });
// }).catch(error => console.error(error))

fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    .then( response => {
        // can't use the response's data yet. have to json() it
        return response.json();
    })
    .then( data => {
        // at this point, we can use the response's data
        console.log(data);
    });
//
//
//
// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
//
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( user => {
//             // log each user's username (or login property)
//             console.log(user.login);
//         })
//     })
//     .catch(error => console.error(error));
//
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }

// later on...

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));


Promise.all([githubPromise, bitbucketPromise])
    .then( data => {
        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .catch( error => {
        // handle errors
    });


// //
// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// console.log("See it's async!");
// myPromise.catch(error => console.error(error));
//
// function onSuccess(response) {
//   // display the requested data to the user
// }
//
// function onFail(error) {
//   // tell the user something went wrong, and to try again later
// }
//
// function stopLoadingAnimation() {
//   // the request is no longer pending, hide the loading spinner
// }

// fetch("/some-url").then(onSuccess).catch(onFail).finally(stopLoadingAnimation);