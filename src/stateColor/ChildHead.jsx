import React, { useContext } from 'react';
import { Color } from '../stateColor';

const ChildHead = () => {
  const { colors, state, setState } = useContext(Color);

  const changeHandler = (e) => {
    setState(e.target.id);
  };
  return (
    <>
      {colors.map((color) => (
        <div
          key={color}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <input
            type='radio'
            id={color}
            name='color'
            checked={state === color}
            onChange={changeHandler}
          />
          <label htmlFor={color}>{color}</label>
        </div>
      ))}
    </>
  );
};

export default ChildHead;
