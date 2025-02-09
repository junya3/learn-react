import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: ${(props) => (props.$isSelected ? '#333' : '#fff')};
  border: 1px solid #333;
  color: ${(props) => (props.$isSelected ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$isSelected ? '#444' : '#ddd')};
  }
`;

const OrangeBtn = styled(StyledBtn)`
  background: ${(props) => (props.$isSelected ? 'orange' : '#fff')};
  border: 1px solid orange;
  color: ${(props) => (props.$isSelected ? '#fff' : 'orange')};

  &:hover {
    background: ${(props) =>
      props.$isSelected ? '#ff8c00' : '#ffebcd'}; /* 濃いオレンジ */
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledComponents = ({ title }) => {
  const [isSelected01, setIsSelected01] = useState(false);
  const [isSelected02, setIsSelected02] = useState(false);

  return (
    <div className='container'>
      <h2>{title}</h2>
      <p>propsも渡せるので良いですね</p>
      <FlexBox>
        <StyledBtn
          $isSelected={isSelected01} // `$` をつける
          onClick={() => setIsSelected01((prev) => !prev)}
        >
          ボタン01
        </StyledBtn>
        <OrangeBtn
          $isSelected={isSelected02} // `$` をつける
          onClick={() => setIsSelected02((prev) => !prev)}
        >
          ボタン02
        </OrangeBtn>
      </FlexBox>
    </div>
  );
};

export default StyledComponents;
