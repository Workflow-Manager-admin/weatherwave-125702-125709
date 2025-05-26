import React from 'react';
import './CurrentWeather.css';

// PUBLIC_INTERFACE
/**
 * Component to display the current weather conditions.
 * Will show temperature, conditions, location, and other current weather data.
 */
const CurrentWeather = () => {
  // Placeholder data - will be replaced with API data in future implementations
  const placeholderData = {
    location: 'San Francisco, CA',
    temperature: '72°F',
    condition: 'Partly Cloudy',
    highTemp: '75°F',
    lowTemp: '61°F',
    feelsLike: '70°F',
    humidity: '65%',
    windSpeed: '8 mph',
    lastUpdated: 'Just now',
  };

  return (
    <div className="current-weather">
      <div className="current-weather-main">
        <div className="current-weather-icon">
          {/* Weather icon placeholder */}
          <div className="placeholder-icon">☁️</div>
        </div>
        <div className="current-weather-info">
          <h2 className="location">{placeholderData.location}</h2>
          <div className="temperature">{placeholderData.temperature}</div>
          <div className="condition">{placeholderData.condition}</div>
          <div className="high-low">
            H: {placeholderData.highTemp} L: {placeholderData.lowTemp}
          </div>
        </div>
      </div>

      <div className="current-details">
        <div className="detail-item">
          <div className="detail-label">Feels Like</div>
          <div className="detail-value">{placeholderData.feelsLike}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Humidity</div>
          <div className="detail-value">{placeholderData.humidity}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Wind</div>
          <div className="detail-value">{placeholderData.windSpeed}</div>
        </div>
      </div>

      <div className="last-updated">
        Updated: {placeholderData.lastUpdated}
      </div>
    </div>
  );
};

export default CurrentWeather;
