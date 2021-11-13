import React from 'react';
import styled from 'styled-components';
import { FaWpforms, FaArrowRight } from 'react-icons/fa';

import FormHeader from '../../components/FormHeader';

const FormsStyled = styled.div`
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: #f1f5f7;
  .main {
    margin-top: 20px;
    display: flex;
  }
`;

const SingleFormCard = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px 20px;
  background-color: white;
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .card-left {
    .status {
      width: 50%;
      padding: 5px;
      background-color: lightblue;
      color: blue;
      font-weight: bold;
      margin-bottom: 10px;
    }
    h6 {
      font-size: 1.2rem;
    }
  }

  .card-right {
    font-size: 1.5rem;
    color: blue;
  }

  .card-left-left {
    display: flex;
    justify-content: space-between;
  }
  .card-main {
    margin: 10px 0 20px 0;
  }
  p {
    svg {
      margin-left: 10px;
      color: gray;
    }
  }
`;

const Forms = () => {
  return (
    <FormsStyled>
      <FormHeader name='All Forms' />
      <div className='main'>
        <SingleFormCard>
          <div className='card-top'>
            <div className='card-left'>
              <p className='status'>Draft</p>
              <h6>Sample Form</h6>
            </div>
            <div className='card-right'>
              <FaWpforms />
            </div>
          </div>
          <div className='card-main'>
            <p>this is a sample of body</p>
          </div>
          <p>
            <span>Edit</span>
            <FaArrowRight />
          </p>
        </SingleFormCard>
      </div>
    </FormsStyled>
  );
};

export default Forms;
