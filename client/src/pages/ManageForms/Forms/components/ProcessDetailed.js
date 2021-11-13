import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ProcessDetailedStyled = styled.div`
  font-size: 1.1rem;

  svg {
    margin-right: 10px;
  }

  select {
    padding: 10px;
    background-color: white;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  .header {
    display: flex;
    font-weight: bold;
    text-transform: capitalize;
  }

  .first-box,
  .second-box,
  .third-box,
  .fourth-box,
  .fifth-box {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 40px 0;
    ul {
      list-style: none;
      li {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
      }
    }
  }
`;

const DeleteButton = styled.button`
  padding: 5px;
  background-color: red;
  color: white;
  outline: none;
  border-radius: 10px;
`;

const ProcessDetailed = ({ setShowMenu, stageName, setStageName }) => {
  const [stageType, setStageType] = useState('submit');
  const [declineButton, setDeclineButton] = useState(false);
  const [rejectButton, setRejectButton] = useState(false);
  const [progressBar, setProgressBar] = useState(true);
  const [section, setSection] = useState('');

  const handleClick = () => {
    setShowMenu(false);
  };

  const handleSelect = (e) => {
    setStageType(e.target.value);
  };

  return (
    <ProcessDetailedStyled>
      <div className='first-box'>
        <ul>
          <li>
            <span className='header'>
              <ArrowLeftOutlined onClick={handleClick} />
              {stageName}
            </span>
            <DeleteButton>delete</DeleteButton>
          </li>
          <li>
            Stage name
            <input
              type='text'
              value={stageName}
              onChange={(e) => setStageName(e.target.value)}
            />
          </li>
          <li>
            Stage type
            <select onChange={handleSelect}>
              <option value='submit'>Submit</option>
              <option value='complete'>Complete</option>
            </select>
          </li>
          <li>
            Submit button label
            <input type='text' />
          </li>
          <li>
            Show decline button
            <Switch
              checked={declineButton}
              onClick={(e) => setDeclineButton(e)}
            />
          </li>
          <li>
            Show reject button
            <Switch
              checked={rejectButton}
              onClick={(e) => setRejectButton(e)}
            />
          </li>

          <li>
            Show in stage progress bar
            <Switch checked={progressBar} onClick={(e) => setProgressBar(e)} />
          </li>
          <li>
            link to section
            <select onChange={(e) => setSection(e.target.value)}>
              <option value=''>select a section</option>
              <option value='employee details'>employee details</option>
              <option value='leave requested'>leave requested</option>
              <option value='manager approval'>manager approval</option>
              <option value='hr approval'>hr approval</option>
            </select>
          </li>
        </ul>
      </div>
      <div className='second-box'>
        <ul>
          <li className='header'>sections settings</li>

          <li>
            Leave Requested
            <label>
              show
              <input type='checkbox' checked />
            </label>
            <label>
              <input type='checkbox' checked /> expand
            </label>
            <label>
              <input type='checkbox' checked />
              enable
            </label>
          </li>
          <li>
            Manager Approval
            <label>
              <input type='checkbox' />
              show
            </label>
            <label>
              <input type='checkbox' /> expand
            </label>
            <label>
              <input type='checkbox' />
              enable
            </label>
          </li>
          <li>
            HR Approval
            <label>
              <input type='checkbox' />
              show
            </label>
            <label>
              <input type='checkbox' /> expand
            </label>
            <label>
              <input type='checkbox' />
              enable
            </label>
          </li>
          <li>
            Employee Details
            <label>
              <input type='checkbox' checked />
              show
            </label>
            <label>
              <input type='checkbox' checked /> expand
            </label>
            <label>
              <input type='checkbox' checked />
              enable
            </label>
          </li>
        </ul>
      </div>
      <div className='third-box'>
        <ul>
          <li className='header'>
            Task Settings <span>+</span>
          </li>
          <li>Complete ## System.Form.Name##System.CurrentStage.Name...</li>
        </ul>
      </div>
      <div className='fourth-box'>
        <ul>
          <li className='header'>
            Email Settings <span>+</span>
          </li>
          <li>Complete ## System.Form.Name##System.CurrentStage.Name...</li>
        </ul>
      </div>
      <div className='fifth-box'>
        <ul>
          <li>
            Next stage Settings <span>+</span>
          </li>
          <li>Complete ## System.Form.Name##System.CurrentStage.Name...</li>
        </ul>
      </div>
    </ProcessDetailedStyled>
  );
};

export default ProcessDetailed;
