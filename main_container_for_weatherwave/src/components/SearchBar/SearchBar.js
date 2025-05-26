import React, { useState } from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
/**
 * Component for searching locations to get their weather data.
 */
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  
  // Placeholder function - will be replaced with API call
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchText);
    // In a real implementation, this would call a function to fetch weather data
    // for the entered location
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search city or zip code..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="search-button">
          <span className="search-icon">🔍</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
