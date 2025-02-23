import React, { createContext, useState } from 'react';
import Child from './contextStateChild/Child';
export const Val = createContext();

const ContextState = ({ title }) => {
  const [state, setState] = useState(0);
  return (
    <Val.Provider value={[state, setState]}>
      <div className='container'>
        <h2>{title}</h2>
        <Child />
      </div>
    </Val.Provider>
  );
};

export default ContextState;
