import React, { useState } from 'react';
import '/src/assets/import.css';

const ImportCss = ({ title }) => {
  const [isSelected, setIsSelected] = useState(false);
  const toggle = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <>
      <div className='container'>
        <h2>{title}</h2>
        <p>
          ボタンが押されるとuseStateで設定したfalseがtrueになりクラスとテキストが変更される
        </p>
        <button className={isSelected ? 'selected' : ''} onClick={toggle}>
          {isSelected ? '選択されました' : 'ボタンを押してください'}
        </button>
      </div>
    </>
  );
};

export default ImportCss;
