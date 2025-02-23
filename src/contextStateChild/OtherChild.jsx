import React, { useContext } from 'react';
import { Val } from '../ContextState';

const OtherChild = () => {
  const [state, setState] = useContext(Val);
  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };
  return (
    <>
      <h3>他のコンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </>
  );
};

export default OtherChild;
