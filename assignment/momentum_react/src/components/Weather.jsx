import { useEffect, useState } from "react";
import config from "./apikey.js";
const { API_KEY } = config;

export default function Weather() {
  //   const [weather, setWeather] = useState({
  //     temperature: 0,
  //     location: "",
  //   });

  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    function getWeather(lat, lon, { setTemp, setLocation }) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const temp = json.main.temp;
          const location = json.name;
          setTemp((temp - 273.15).toFixed(1));
          setLocation(location);
        });
    }

    function handleGeoSuccess(pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      getWeather(latitude, longitude, { setTemp, setLocation });
    }

    return () => {
      function handleGeoError() {
        console.log("error!");
      }

      function init() {
        navigator.geolocation.getCurrentPosition(
          handleGeoSuccess,
          handleGeoError
        );
      }

      init();
    };
  }, [temp, location]);

  return (
    <header className="weather">
      <div>{temp}℃</div>
      <div>{location}</div>
    </header>
  );
}
