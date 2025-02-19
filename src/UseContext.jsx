import React from 'react';
import { createContext } from 'react';
import Child from './contextChild/Child';
export const text = createContext('親で定義したテキストが入ります。');

const UseContext = ({ title }) => {
  return (
    <>
      <div className='container'>
        <h2>{title}</h2>
        <Child />
      </div>
    </>
  );
};

export default UseContext;
