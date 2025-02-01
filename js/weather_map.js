

mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4946, 29.4252],
    zoom: 9
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudG9zemxzMyIsImEiOiJjbHBscGFhc3MwMjJqMmtwZnNyNjhjcjJ4In0.3O5mZEOVSJdsV1uNIyitEw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

// Default Marker Initialization
const marker = new mapboxgl.Marker({ draggable: true })
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

// Update Weather Forecast Function
function updateWeatherForecast(location) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${WM_Key}&units=imperial`)
        .then(response => response.json())
        .then(forecastData => {
            console.log('Weather Forecast Data:', forecastData);
            // Iterate over the next 5 days of forecast data
            for (let i = 0; i < 5; i++) {
                const forecastEntry = forecastData.list[i * 8];
                const card = document.getElementById(`day-${i + 1}`);
                card.querySelector('.city').textContent = `City: ${location}`;
                card.querySelector('.card-header').textContent = `Date: ${new Date(forecastEntry.dt * 1000).toLocaleDateString()}`;
                card.querySelector('.temp').textContent = `Temperature: ${forecastEntry.main.temp}°F`;
                card.querySelector('.description').textContent = `Description: ${forecastEntry.weather[0].description}`;
                card.querySelector('.humidity').textContent = `Humidity: ${forecastEntry.main.humidity}%`;
                card.querySelector('.wind').textContent = `Wind: ${forecastEntry.wind.speed} mph`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather forecast data:', error);
        });
}


// Event Listener for Marker Drag End
marker.on('dragend', function () {
    const lngLat = marker.getLngLat();
    const location = `${lngLat.lat.toFixed(4)}, ${lngLat.lng.toFixed(4)}`;

    // Fetch geocoding data to get city name for the dropped marker location
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${MB_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                // Extract city from the first result
                const city = data.features[0].context.find(c => c.id.includes('place')).text;

                // Update weather forecast for the dropped marker location with city name
                updateWeatherForecast(city);
            }
        })
        .catch(error => {
            console.error('Error fetching geocoding data:', error);
        });
});


// Event Listener for Submitting Search Form
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('search-input').value;
    updateWeatherForecast(location);

    // Fetch geocoding data to get coordinates for the searched location
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${MB_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const coordinates = data.features[0].center;
                // Update map center and marker position based on the searched location
                map.setCenter(coordinates);
                marker.setLngLat(coordinates);
                // Update weather forecast for the searched location
                updateWeatherForecast(location);
            }
        })
        .catch(error => {
            console.error('Error fetching geocoding data:', error);
        });
});



