async function checkWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}` + `$appid=${WM_KEY}`);
    var data = await response.json();
    console.log(data)
}
checkWeather();










