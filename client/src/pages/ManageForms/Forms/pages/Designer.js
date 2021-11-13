import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

const DesignerStyled = styled.div`
  position: absolute;
  left: 150px;
  width: 90%;

  display: flex;
  .left {
    flex: 0.3;
    height: 100%;

    ul {
      list-style: none;
      li {
        padding: 10px;
        border: 2px solid;
        margin: 5px 0;
      }
    }
  }
  .center {
    flex: 2;
    margin: 0 200px;
    p {
      border: 1px solid;
      padding: 10px;
      font-weight: 300;
      font-size: 2rem;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      background-color: lightgray;
    }
  }
  .right {
    flex: 1;
    background-color: red;
  }
`;

const Designer = () => {
  return (
    <DesignerStyled>
      <div className='left'>
        <ul>
          <li>
            <input type='text' />
          </li>
          <li>Checkboxes</li>
          <li>Currency Input</li>
          <li>Date</li>
          <li>DropDown</li>
          <li>File Upload</li>
          <li>Header Text</li>
          <li>HyperLink</li>
          <li>Image</li>
          <li>Label</li>
          <li>List Lookup</li>
          <li>Multi-line Input</li>
          <li>Number Input</li>
          <li>Paragraph</li>
          <li>People Picker</li>
          <li>Radio Input</li>
          <li>Rich Textarea</li>
          <li>Text Input</li>
          <li>Yes/No Input</li>
          <li>Repeater</li>
          <li>Section</li>
        </ul>
      </div>
      <div className='center'>
        <p>
          Leave Requested <AiOutlineDown />
        </p>
        <p>
          Manager Approval <AiOutlineDown />
        </p>
        <p>
          HR Approval <AiOutlineDown />
        </p>
        <p>
          Employee Details <AiOutlineDown />
        </p>
      </div>
      <div className='right'></div>
    </DesignerStyled>
  );
};

export default Designer;
