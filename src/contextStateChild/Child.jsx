import React from 'react';
import GrandChild from './GrandChild';
import OtherChild from './OtherChild';

const Child = () => {
  return (
    <>
      <GrandChild />
      <OtherChild />
    </>
  );
};

export default Child;
