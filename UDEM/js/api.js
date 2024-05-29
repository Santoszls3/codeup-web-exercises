// using Fetch API

fetch("http://swapi.dev/api/people/1/")
.then(res => {
        console.log("RESOLVED!", res);
        return res.json()
})
    .then( data => {
        console.log(data);
       return fetch("http://swapi.dev/api/people/2/");
    })
    .then(res => {
        console.log("SECOND REQUEST RESOLVED!!");
        return res.json();
    })
    .then( data => {
    console.log(data);
    return fetch("http://swapi.dev/api/people/2/");
})
    .catch(e => {
        console.log("ERROR!", e);
    });
