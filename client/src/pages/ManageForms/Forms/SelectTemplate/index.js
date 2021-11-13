import React from 'react';
import styled from 'styled-components';
import { FaWpforms, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FormHeader from '../../../components/FormHeader';

const SelectTemplateStyled = styled.div`
  position: absolute;
  left: 150px;
  width: 90%;
`;

const FormTypes = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const SampleCard = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .card-left {
    .status {
      width: 70px;
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
  .card-bottom {
    margin-top: 20px;
    svg {
      margin-left: 10px;
      color: gray;
    }
  }
`;

const SelectTemplate = () => {
  return (
    <SelectTemplateStyled>
      <FormHeader name='select a template' />
      <FormTypes>
        <SampleCard>
          <div className='card-top'>
            <div className='card-left'>
              <p className='status'>Draft</p>
              <h6>Sample Form</h6>
            </div>
            <div className='card-right'>
              <FaWpforms />
            </div>
          </div>
          <div className='card-main'></div>
          <div className='card-bottom'>
            <Link to='/manage-forms/form/sample/edit/1/settings'>
              <span>Create Form</span>
              <FaArrowRight />
            </Link>
          </div>
        </SampleCard>
        <SampleCard>
          <div className='card-top'>
            <div className='card-left'>
              <p className='status'>Draft</p>
              <h6>Blank Form</h6>
            </div>
            <div className='card-right'>
              <FaWpforms />
            </div>
          </div>
          <div className='card-main'></div>
          <div className='card-bottom'>
            <Link to='/manage-forms/form/blank/edit/1/settings'>
              <span>Create Form</span>
              <FaArrowRight />
            </Link>
          </div>
        </SampleCard>
        <SampleCard>
          <div className='card-top'>
            <div className='card-left'>
              <p className='status'>Draft</p>
              <h6>Employee Leave Request Form</h6>
            </div>
            <div className='card-right'>
              <FaWpforms />
            </div>
          </div>
          <div className='card-main'></div>
          <div className='card-bottom'>
            <Link to='/manage-forms/form/employee-leave/edit/1/settings'>
              <span>Create Form</span>
              <FaArrowRight />
            </Link>
          </div>
        </SampleCard>
      </FormTypes>
    </SelectTemplateStyled>
  );
};

export default SelectTemplate;
