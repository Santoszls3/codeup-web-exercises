mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4946, 29.4252],
    zoom: 9
});

// Section: Default Marker Initialization
const marker = new mapboxgl.Marker({ draggable: true })
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

// Section: Update Weather Forecast Function
function updateWeatherForecast(location) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${WM_Key}&units=imperial`)
        .then(response => response.json())
        .then(forecastData => {
            console.log('Weather Forecast Data:', forecastData);

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

// Section: Event Listener for Submitting Search Form
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






