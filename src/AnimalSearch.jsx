import React, { useState } from 'react';

const AnimalSearch = ({ title }) => {
  const animals = ['dog', 'cat', 'pig'];
  const [filterVal, setFilterVal] = useState('');

  const search = (e) => {
    setFilterVal(e.target.value);
  };

  return (
    <div className='container'>
      <h2>{title}</h2>
      <input type='text' value={filterVal} onChange={search} />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </div>
  );
};

export default AnimalSearch;
