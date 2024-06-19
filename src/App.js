import React, { useState } from 'react';
import './App.css';
import CatTable from './CatTable';
import CatCard from './CatCard';

function App() {
  const [catData, setCatData] = useState(null);
  const [viewMode, setViewMode] = useState('table');

  const fetchRandomCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1');
      const data = await response.json();
      const catId = data[0].id;
      fetchCatDetails(catId);
    } catch (error) {
      console.error('Error fetching random cat:', error);
    }
  };

  const fetchCatDetails = async (id) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
      const data = await response.json();
      setCatData(data);
    } catch (error) {
      console.error('Error fetching cat details:', error);
    }
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="App">
      <h1>Cat Information</h1>
      <div className="buttons">
        <button onClick={fetchRandomCat}>Fetch Random Cat</button>
        <button onClick={() => handleViewChange('table')}>View as Table</button>
        <button onClick={() => handleViewChange('card')}>View as Card</button>
      </div>
      <div className="content">
        {catData && viewMode === 'table' && <CatTable cat={catData} />}
        {catData && viewMode === 'card' && <CatCard cat={catData} />}
      </div>
    </div>
  );
}

export default App;
