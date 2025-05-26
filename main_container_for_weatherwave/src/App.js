import React from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">🌦️</span> WeatherWave
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="app-content">
            <WeatherContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;