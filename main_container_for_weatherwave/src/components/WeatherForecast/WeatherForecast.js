import React from 'react';
import './WeatherForecast.css';

// PUBLIC_INTERFACE
/**
 * Component to display upcoming weather forecasts.
 * Shows daily or hourly forecast information.
 */
const WeatherForecast = () => {
  // Placeholder forecast data - will be replaced with API data
  const forecastData = [
    { day: 'Today', temp: '72°/61°', icon: '☀️', condition: 'Sunny' },
    { day: 'Mon', temp: '70°/59°', icon: '🌤️', condition: 'Partly Cloudy' },
    { day: 'Tue', temp: '68°/57°', icon: '☁️', condition: 'Cloudy' },
    { day: 'Wed', temp: '65°/54°', icon: '🌧️', condition: 'Rainy' },
    { day: 'Thu', temp: '67°/55°', icon: '🌦️', condition: 'Showers' }
  ];

  return (
    <div className="weather-forecast">
      <h3 className="section-title">5-Day Forecast</h3>
      
      <div className="forecast-container">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">{day.day}</div>
            <div className="forecast-icon">{day.icon}</div>
            <div className="forecast-temp">{day.temp}</div>
            <div className="forecast-condition">{day.condition}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
