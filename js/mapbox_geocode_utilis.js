/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => data.features[0].center);
}

/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then(res => res.json())
        // to get all the data from the request, comment out the following three lines...
        .then(data => data.features[0].place_name);
}



// fetch
// const username = 'Santos Gonzales ';
function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {
        headers: {
            'Authorization': `token ${GH_KEY}`,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API request failed: ${response.statusText}`);
            }
            return response.json();
        })
        .then(events => {
            const commitEvent = events.find(event => event.type === 'PushEvent');
            if (commitEvent) {
                return commitEvent.created_at;
            } else {
                throw new Error('No commit events found for the user.');
            }
        });
}

getLastCommitDate(username)
    .then(date => console.log(`Last commit date for ${username}: ${date}`))
    .catch(error => console.error(error.message));