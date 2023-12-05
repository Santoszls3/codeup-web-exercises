const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';// const WM_Key
const mapboxToken = 'YOUR_MAPBOX_API_KEY';// const MB_KEY =

// Function to get current weather conditions
async function getCurrentWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WM_Key}`);
    const data = await response.json();

    // Update current conditions on the page
    document.getElementById('current-conditions').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <!-- Add more information as needed -->
    `;
}

// Function to get five-day forecast
async function getFiveDayForecast(city) {
    // Similar to getCurrentWeather, make a fetch request to OpenWeatherMap API for forecast
    // Update the 'five-day-forecast' section on the page
}

// // Function to initialize Mapbox map
// function initMap() {
//     mapboxgl.accessToken = mapboxToken;
//     const map = new mapboxgl.Map({
//         container: 'map-container',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [0, 0], // Initial center coordinates
//         zoom: 1, // Initial zoom level
//     });
//
//     // Add functionality to drop a pin on the map and update forecast
//     // Add Mapbox Geocoding functionality for location search
// }
//
// // Initial call to get weather for your city
// getCurrentWeather('YourCityName');