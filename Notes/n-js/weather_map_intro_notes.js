"use strict";






mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9, // starting zoom
});



map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

// Function to perform geocoding using Mapbox API
function geocode(query) {
    const geocodeEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${MB_KEY}`;
    return fetch(geocodeEndpoint)
        .then(response => response.json())
        .then(data => {
            const coordinates = data.features[0].center;
            return coordinates;
        });
}



// Adds an event listener to the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const userInput = document.getElementById('search-input').value;

    // Use the geocode function to get coordinates
    geocode(userInput)
        .then(coordinates => {
            fetchWeatherData(coordinates);
        })
        .catch(error => {
            console.error('Error geocoding or fetching weather data:', error);
        });
});

// Function to fetch weather data based on coordinates
function fetchWeatherData(coordinates) {
    const [lng, lat] = coordinates;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WM_Key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(weatherData => {
            updateWeatherInfo(weatherData);
            updateFiveDayForecast(weatherData);
            map.flyTo({ center: [lng, lat], zoom: 9 }); // Fly to the new location on the map
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to update HTML elements with weather information
function updateWeatherInfo(weatherData) {
    const cityNameElement = document.getElementById('city-name');
    const temperatureElement = document.getElementById('temperature');

    if (cityNameElement && temperatureElement) {
        const cityName = weatherData.city.name || 'Unknown City';
        const temperature = weatherData.list && weatherData.list[0].main.temp
            ? `${(weatherData.list[0].main.temp - 273.15).toFixed(2)} °C`
            : 'Temperature not available';

        cityNameElement.textContent = `City: ${cityName}`;
        temperatureElement.textContent = `Temperature: ${temperature}`;
    } else {
        console.error('One or more elements not found.');
    }
}

// Function to update the 5-day forecast in HTML
function updateFiveDayForecast(weatherData) {
    const forecastElement = document.getElementById('forecast');

    // Clear existing forecast elements
    forecastElement.innerHTML = '';

    // Loop through forecast entries (assuming data is available in 3-hour intervals)
    for (let i = 0; i < weatherData.list.length; i += 8) {
        const forecastEntry = weatherData.list[i];

        // Extract relevant information for each day (adjust as needed)
        const date = new Date(forecastEntry.dt * 1000); // Convert timestamp to date
        const temperature = forecastEntry.main.temp;
        const weatherDescription = forecastEntry.weather[0].description;
        const weatherIcon = forecastEntry.weather[0].icon;

        // Create a new element for each day's forecast
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `
            <p>Date: ${date.toLocaleDateString()}</p>
            <p>Temperature: ${temperature} K</p>
            <p>Description: ${weatherDescription}</p>
        `;

        // Append the forecast item to the forecast container
        forecastElement.appendChild(forecastItem);

    }
}




//
//
// fetchWeatherData();
//
// function fetchWeatherData() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//         `lat=29.426825118534886&lon=-98.48948239256946` +
//         `&appid=${WM_Key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             return response.json();
//         })
//         .then(weatherData => updateWeatherInfo(weatherData))
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             // Handle the error (e.g., display an error message on the page)
//         });
// }
//
// function updateWeatherInfo(weatherData) {
//     // Update HTML elements with weather information
//     const cityNameElement = document.getElementById('city-name');
//     const temperatureElement = document.getElementById('temperature');
//
//     if (cityNameElement && temperatureElement) {
//         const cityName = weatherData.name || 'Unknown City';
//         const temperature = weatherData.main && weatherData.main.temp
//             ? `${(weatherData.main.temp - 273.15).toFixed(2)} °C`
//             : 'Temperature not available';
//
//         cityNameElement.textContent = `City: ${cityName}`;
//         temperatureElement.textContent = `Temperature: ${temperature}`;
//     } else {
//         console.error('One or more elements not found.');
//     }
// }
//




// function convertTime() {
//
// }
//
// const lat = 29.4260;
// const lon = -98.4861;
// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_Key}&units=imperial`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         // 3 hours 3 x 8 = 24
//
//         for (let i = 0; i < data.list.length; i += 8) {
//           console.log(data.list[i].main.pressure);
//         }
//         // 1003 for pressure
//     })
//     .catch((e) => {
//       console.error(e);
//     });



// // Searching by City
// const city = 'Paris';
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WM_Key}`)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           console.log(data.list[0].dt);
//           console.log(new Date(data.list[0].dt * 1000).toDateString())
//         })
//         .catch((e) => {
//           console.error(e);
//         });


// Customize the response with units
// const city = 'Whitefish, TX, US';
// const units = 'imperial';
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=${units}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.error(e);
//     });



// Can format timestamp with new Date(forecast.dt * 1000).toDateString()





// <!--==================== WEATHER MAP INTRO-->
//
// <!--OpenWeather: A London-based company providing weather data services. - https://openweathermap.org/-->
//
// <!--Multiple APIs provide various weather data sets. - https://openweathermap.org/api-->
//
// <!--We will use the free API for 5 Day / 3 Hour Forecast.- https://openweathermap.org/forecast5-->
//
// <!--To make a call, you need to sign up for an account and get an API token. - https://home.openweathermap.org/users/sign_up-->
//
// <!--Once you have a token, you can hit the API like so:-->
//
// <!--api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}-->
//
// <!--Can format timestamp with new Date(dt * 1000).toDateString()-->






// Does not work
// var button = document.querySelector(".button")
// var inputValue = document.querySelector(".inputValue")
// var name = document.querySelector(".name")
// var desc = document.querySelector(".desc")
// var temp = document.querySelector(".temp")
//
// button.addEventListener("click", function (){
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=`+inputValue.value+`&appid=${WM_Key}`)
//         .then(response => response.json())
//         .then(data => console.log(data) )
//
//
//
//         .catch(err => alert("Wrong City Name!"))
// })
// ***************************** starting code
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${WM_Key}`)
//     .then(response => response.json())
//     .then(currentWeather => console.log(currentWeather))
//     .catch(error => console.error('Error fetching weather data:', error));




// button.addEventListener("click", function (){
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=`+inputValue.value+`&appid=${WM_Key}`)
//         .then(response => response.json())
//         .then(data => {
//             var nameValue = data["name"];
//             var tempValue = data["main"]["temp"];
//             var descValue = ["weather"][0]["description"];
//
//             name.innerHTML = nameValue;
//             temp.innerHTML = tempValue;
//             desc.innerHTML = descValue;
//         })
//
//
//
//         .catch(err => alert("Wrong City Name!"))
// })






// // Searching by City
// const city = 'Paris';
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WM_Key}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.list[0].dt);
//         console.log(new Date(data.list[0].dt * 1000).toDateString())
//     })
//     .catch((e) => {
//         console.error(e);
//     });


// Using cards
//
// mapboxgl.accessToken = MB_KEY;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [-95.7309312, 29.8173647], // starting position [lng, lat]
//     zoom: 4, // starting zoom
// });
//
// map.addControl(new mapboxgl.NavigationControl()); // adds a zoom controller


// const city = 'houston';
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WM_KEY}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.list[0].dt);
//         console.log(new Date(data.list[0].dt * 1000).toDateString())
//     })
//     .catch((e) => {
//         console.error(e);
//     });