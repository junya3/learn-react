import React, { useReducer } from 'react';

// 関数として分けることもできる

const reducer = (prev, e) => {
  switch (e) {
    case '+':
      return ++prev;
    case '-':
      return --prev;

    default:
      return;
  }
};

const UseReducer = ({ title }) => {
  // reducer()を引数として持ってくる。
  const [state, dispatch] = useReducer(reducer, 0);
  const countUp = () => {
    dispatch('+');
  };
  const countDown = () => {
    dispatch('-');
  };
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <p>{state}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
    </>
  );
};

export default UseReducer;
