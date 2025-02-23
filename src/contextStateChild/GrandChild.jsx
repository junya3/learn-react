import React, { useContext, useState } from 'react';
import { Val } from '../ContextState';

const GrandChild = () => {
  const [value] = useContext(Val);
  return (
    <>
      <div
        className='wrap'
        style={{ padding: '1rem', border: '1px solid', borderRadius: '0.2rem' }}
      >
        <p>孫コンポーネント</p>
        <p>{value}</p>
      </div>
    </>
  );
};

export default GrandChild;
