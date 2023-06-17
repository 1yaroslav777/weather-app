import React from 'react';

const WeatherInfo = ({ weatherData, weatherName }) => {
  console.log(weatherName);
  return (
    <div className="weather-info">
      <img src={'./img/' + weatherName + '.svg'} className="weather-icon" />

      <div className="weather-description">
        <h1>{weatherName}</h1>
        <span>Current Temperature: {Math.floor(weatherData.main?.temp)}°C</span>
        <br />
        <span>Max Temperature: {Math.floor(weatherData.main?.temp_max)}°C</span>
        <br />
        <span>Min Temperature: {Math.floor(weatherData.main?.temp_min)}°C</span>
        <br />
        <span>Wind speed:</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
