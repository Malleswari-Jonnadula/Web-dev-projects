const form = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city");
const card = document.querySelector(".card");
const apikey = "fec93a0b74ae37a54c8131c4a042fa9f";

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error);
            displayError("Couldn't fetch weather data. Please check the city name.");
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        throw new Error("Couldn't fetch weather data");
    }
    return await response.json();
}

function displayWeather(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityshow = document.createElement("h1");
    cityshow.textContent = city;
    cityshow.classList.add("Display");
    card.appendChild(cityshow);

    const tempElem = document.createElement("p");
    tempElem.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    tempElem.classList.add("temperature");
    card.appendChild(tempElem);

    const humid = document.createElement("p");
    humid.textContent = `Humidity : ${humidity}%`;
    humid.classList.add("humidity");
    card.appendChild(humid);

    const des = document.createElement("p");
    des.textContent = description;
    des.classList.add("desc");
    card.appendChild(des);

    const emojishow = document.createElement("p");
    emojishow.textContent = getWeatherEmoji(id);
    emojishow.classList.add("emoji");
    card.appendChild(emojishow);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "☔";
        case (weatherId >= 500 && weatherId < 600):
            return "☔";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "☃️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId > 800 && weatherId < 900):
            return "☁️";
        default:
            return "❗";
    }
}

function displayError(message) {
    const err = document.createElement("p");
    err.textContent = message;
    err.classList.add("error");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(err);
}
