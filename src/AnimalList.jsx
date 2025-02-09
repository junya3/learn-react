import React from 'react';

const AnimalList = ({ title }) => {
  const animals = ['dog', 'cat', 'elephant'];

  return (
    <div className='container'>
      <h2>{title}</h2>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
