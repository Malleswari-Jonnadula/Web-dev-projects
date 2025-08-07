# 🌤️ Weather App  
A clean and interactive Weather App built using **HTML**, **CSS**, and **JavaScript**.  
This project lets users search any city and get real-time weather updates including temperature, humidity, and conditions using the **OpenWeatherMap API**.  
Just enter a city name, hit search, and instantly view the weather report!

---

## 🎯 Features

- 🔍 Search weather by city name
- 🌡️ Displays real-time temperature in Celsius
- 💧 Shows humidity levels
- 📝 Weather description (e.g., Clear, Rain, Clouds)
- 🌈 Weather emoji based on weather condition
- ❌ Handles invalid or empty city input with error messages
- 📱 Responsive and modern UI styling

---

## ✅ Concepts Used

- JavaScript DOM manipulation (`getElementById`, `textContent`, `querySelector`)
- API Fetching using `fetch()` and async/await
- JSON parsing and conditional rendering
- Error handling with user feedback
- Responsive CSS design
- OpenWeatherMap API integration

---

## 🚀 How It Works

1. **User inputs** a city name.
2. App **fetches weather data** using OpenWeatherMap API.
3. Displays:
   - 🌆 City Name
   - 🌡️ Temperature (converted from Kelvin to Celsius)
   - 💧 Humidity
   - 📝 Weather Description
   - 🌈 Weather Emoji (based on weather ID)

If the input is invalid or empty, an appropriate error message is shown.

---

## 🔑 API Used

- **OpenWeatherMap API**  
  [https://openweathermap.org/api](https://openweathermap.org/api)

  - **Data Returned**:
    - City
    - Temperature
    - Humidity
    - Weather Description
    - Weather ID

---

## 🧠 Learnings

- Working with APIs using fetch
- JSON parsing and destructuring
- DOM manipulation using JavaScript
- Error handling for errors
- Styling forms and responsive components

---

## ⏯️ How to Run Locally
1. Clone the repo or copy the files to your system.
2. Replace the value of `apikey` in `index.js` with your own from [OpenWeatherMap](https://openweathermap.org/api).
3. Open `index.html` in your browser
4. Enter a city and view the weather instantly!

---

## 🔗 Live Demo  
[View Weather App Demo](https://malleswari-jonnadula.github.io/Web-dev-projects/Weather-app/)

---
