import React, { createContext, useState } from 'react';
import Child from './stateColor/StateChild.jsx';

const SetColor = ['#efefef', '#000000', '#999999'];

export const Color = createContext();

const StateColor = ({ title }) => {
  const [state, setState] = useState(SetColor[0]);
  return (
    <Color.Provider value={{ colors: SetColor, state, setState }}>
      <div className='container' style={{ background: state }}>
        <h2>{title}</h2>
        <Child />
      </div>
    </Color.Provider>
  );
};

export default StateColor;
