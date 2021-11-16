import React, { useState } from 'react';
import styled from 'styled-components';

const DummyDataStyled = styled.div`
  position: absolute;
  left: 200px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .left {
    flex: 1;
    ul {
      display: flex;
      list-style: none;
      li {
        padding: 10px;
        border: 2px solid;
        font-size: 1.2rem;
      }
    }
  }
  .right {
    flex: 2;
  }
`;

const DummyData = () => {
  const [textInput, setTextInput] = useState(false);

  const handleClick = (e) => {
    setTextInput(!textInput);
  };

  return (
    <DummyDataStyled>
      <div className='left'>
        <ul>
          <li onClick={handleClick}>textinput</li>
        </ul>
      </div>
      <div className='right'>{textInput && <input type='text' />}</div>
    </DummyDataStyled>
  );
};

export default DummyData;
