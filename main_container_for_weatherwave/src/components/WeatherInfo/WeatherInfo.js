import React from 'react';
import './WeatherInfo.css';

// PUBLIC_INTERFACE
/**
 * Component to display additional weather information.
 * Shows data like UV index, air quality, sunrise/sunset times, etc.
 */
const WeatherInfo = () => {
  // Placeholder data - will be replaced with API data
  const weatherInfoData = {
    uvIndex: '3 (Moderate)',
    airQuality: 'Good',
    sunrise: '6:24 AM',
    sunset: '8:15 PM',
    visibility: '10 mi',
    pressure: '1012 hPa',
  };

  return (
    <div className="weather-info">
      <h3 className="section-title">Weather Details</h3>
      
      <div className="info-grid">
        <div className="info-item">
          <div className="info-label">UV Index</div>
          <div className="info-value">{weatherInfoData.uvIndex}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Air Quality</div>
          <div className="info-value">{weatherInfoData.airQuality}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Sunrise</div>
          <div className="info-value">{weatherInfoData.sunrise}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Sunset</div>
          <div className="info-value">{weatherInfoData.sunset}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Visibility</div>
          <div className="info-value">{weatherInfoData.visibility}</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">Pressure</div>
          <div className="info-value">{weatherInfoData.pressure}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
