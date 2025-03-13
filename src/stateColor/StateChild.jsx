import React from 'react';
import ChildHead from './ChildHead.jsx';

const StateChild = () => {
  return (
    <>
      <div className='wrap'>
        <div className='w_top'>
          <ChildHead />
        </div>
        <div className='w_bottom'>
          <p>テーマの切り替え</p>
        </div>
      </div>
    </>
  );
};

export default StateChild;
