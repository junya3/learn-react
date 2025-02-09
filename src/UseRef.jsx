import React, { useRef } from 'react';

const UseRef = ({ title }) => {
  const inputRef = useRef(null);

  return (
    <div className='container'>
      <h2>{title}</h2>
      <input type='text' ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>フォーカス</button>
    </div>
  );
};

export default UseRef;
