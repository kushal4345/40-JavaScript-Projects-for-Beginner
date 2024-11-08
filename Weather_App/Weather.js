const ApiKey = 'c1e9f71c6c090ac3c8951e8ca2762959';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let SearchBox = document.querySelector(".Search input");
let SearchButton = document.querySelector(".Search button");

async function Tempgen(CountryValue) {
    const response = await fetch(url + CountryValue + `&appid=${ApiKey}`);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) { // Checks if the city was found
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector("#humidity-value").innerHTML = Math.floor(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.floor(data.wind.speed) + " Km/h";
        
        // Weather condition logic for the image
        const weatherCondition = data.weather[0].main;
        if (weatherCondition === "Clouds") {
            document.querySelector(".Weather_image").src = "cloud.png";
        } else if (weatherCondition === "Clear") {
            document.querySelector(".Weather_image").src = "clear.png";
        } else if (weatherCondition === "Rain") {
            document.querySelector(".Weather_image").src = "rainy-day.png";
        } else {
            document.querySelector(".Weather_image").src = "default.png";
        }
    } else {
        alert("City not found. Please enter a valid city name.");
    }
}

SearchButton.addEventListener('click', () => {
    Tempgen(SearchBox.value);
});
