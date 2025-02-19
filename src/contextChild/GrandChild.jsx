import React from 'react';
import { useContext } from 'react';
import { text } from '../UseContext';

const GrandChild = () => {
  const value = useContext(text);
  return (
    <>
      <p>{value}</p>
    </>
  );
};

export default GrandChild;
