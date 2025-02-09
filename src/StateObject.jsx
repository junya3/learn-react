import React, { useState } from 'react';

const StateObject = ({ title }) => {
  const defaultPerson = { name: 'Tom', age: 18 };
  const [person, setPerson] = useState(defaultPerson);

  const changeName = (e) => {
    setPerson((prevPerson) => ({ ...prevPerson, name: e.target.value }));
  };
  const changeAge = (e) => {
    setPerson((prevPerson) => ({ ...prevPerson, age: e.target.value }));
  };

  return (
    <>
      <div className='container'>
        <h2>{title}</h2>
        <input
          type='text'
          onChange={changeName}
          id='name'
          value={person.name}
        />
        <input type='number' onChange={changeAge} id='age' value={person.age} />
        <p>{person.name}さん</p>
        <p>{person.age}歳</p>
      </div>
    </>
  );
};

export default StateObject;
