import config from "./apikey.js";
const { API_KEY } = config;

const temperature = document.getElementById("temp");
const current = document.getElementById("location");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // console.log(json);
      const temp = json.main.temp;
      const location = json.name;
      temperature.innerText = `${(temp - 273.15).toFixed(1)} ℃`;
      current.innerText = `${location}`;
    });
}

function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error!");
}

function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();
