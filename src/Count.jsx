import { useState } from 'react'

const count = ({title}) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((count) => count + 1);
  }
  const countDown = () => {
    if(count <= 0) return;
    setCount((count) => count - 1);
  }

  return (
    <>
    <div className="container">
      <h2>{title}</h2>
      <p>0以上で動作します。</p>
      <p>現在のカウント:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
    </>
  );
};

export default count
