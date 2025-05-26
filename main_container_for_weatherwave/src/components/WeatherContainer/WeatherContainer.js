import React from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import SearchBar from '../SearchBar/SearchBar';
import './WeatherContainer.css';

// PUBLIC_INTERFACE
/**
 * Main container component for the WeatherWave application.
 * Houses all the weather-related sections including search, current weather,
 * forecast, and additional weather information.
 */
const WeatherContainer = () => {
  return (
    <div className="weather-container">
      <div className="weather-app-header">
        <h1>WeatherWave</h1>
        <p className="weather-app-tagline">Your daily weather companion</p>
      </div>

      <SearchBar />
      
      <div className="weather-content">
        <CurrentWeather />
        
        <div className="weather-additional-content">
          <WeatherForecast />
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
