import React from 'react';

function CatCard({ cat }) {
  return (
    <div className="card">
      <img src={cat.url} alt="Cat" />
      <h2>{cat.breeds[0].name}</h2>
      <p><strong>Origin:</strong> {cat.breeds[0].origin}</p>
      <p><strong>Temperament:</strong> {cat.breeds[0].temperament}</p>
    </div>
  );
}

export default CatCard;
