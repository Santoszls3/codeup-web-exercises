

fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
function getGithubUsernames() {
    return fetch("https://api.github.com/users/Santoszls3/events/public", {headers: {'Authorization': 'token ' + GH_KEY}})
        .then(response => response.json())
}
// later on...

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj);
    });
}).catch(error => console.error(error))