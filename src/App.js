import React from "react";
import WeatherSearch from "./WeatherSearch";
import './App.css';

function App() {
  return (
    <div className="Weather">
      <h1> Weather App</h1>
      <WeatherSearch />
      <a href="https://github.com/palakmalik5/weather">Source by Palak Malik</a>
    </div>
  );
}

export default App;
