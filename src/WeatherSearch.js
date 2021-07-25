import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "538221d97e7453ab216f5f95980b0a93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <br/>
          <li>Description: {weather.description} </li>
          <br/>
          <li>Humidity: {weather.humidity}% </li>
          <br/>
          <li>Wind: {Math.round(weather.wind)} m/s </li>
          <li>
            <img src={weather.icon} alt="Icon weather" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
