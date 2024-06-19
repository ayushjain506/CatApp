import React from 'react';

function CatTable({ cat }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Breed</th>
          <th>Origin</th>
          <th>Temperament</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Image"><img src={cat.url} alt="Cat" width="100" /></td>
          <td data-label="Breed">{cat.breeds[0].name}</td>
          <td data-label="Origin">{cat.breeds[0].origin}</td>
          <td data-label="Temperament">{cat.breeds[0].temperament}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CatTable;
