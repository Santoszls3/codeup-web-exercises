const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';// const WM_Key = "101eed49b4b45d7ace392a6ceedbc225"   apiKey
const mapboxToken = 'YOUR_MAPBOX_API_KEY';// const MB_KEY = "pk.eyJ1Ijoic2FudG9zemxzMyIsImEiOiJjbHBscGFhc3MwMjJqMmtwZnNyNjhjcjJ4In0.3O5mZEOVSJdsV1uNIyitEw" Mapbox Token




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






