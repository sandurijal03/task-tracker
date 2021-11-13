import React from 'react';
import styled from 'styled-components';

const FormNavbarStyled = styled.div`
  position: absolute;
  left: 150px;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      margin: 20px;
    }
  }
`;

const FormNavbar = () => {
  return (
    <FormNavbarStyled>
      <div className='left'></div>
      <div className='right'>
        <ul>
          <li>
            <button>save form</button>
          </li>
          <li>
            <button>Preview form</button>
          </li>
          <li>
            <button>Update form status</button>
          </li>
          <li>
            <button>Copy form</button>
          </li>
          <li>
            <button>Delete form</button>
          </li>
        </ul>
      </div>
    </FormNavbarStyled>
  );
};

export default FormNavbar;
