"use strict";

mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


// function convertTime() {
//
// }

// const lat = 29.4260;
// const lon = -98.4861;
// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
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