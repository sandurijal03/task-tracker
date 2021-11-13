import React, { useState } from 'react';
import styled from 'styled-components';
import { MdNavigateNext } from 'react-icons/md';
import ProcessDetailed from '../components/ProcessDetailed';

const ProcessStyled = styled.div`
  position: absolute;
  width: 90%;
  left: 150px;
  .main {
    display: flex;
  }

  .left {
    width: 30%;
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    ul {
      list-style: none;
      li {
        border-bottom: 2px solid lightgray;
        padding: 20px;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .right {
    flex: 2;
    margin-left: 10px;
  }
`;

const Process = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [stageName, setStageName] = useState('');

  const handleClick = (e) => {
    setStageName(e.target.innerText);
    setShowMenu(true);
  };

  return (
    <ProcessStyled>
      <h3>Form Process</h3>
      <div className='main'>
        <div className='left'>
          <ul>
            <li onClick={handleClick}>
              Manager Approval
              <span>
                <MdNavigateNext />
              </span>
            </li>
            <li onClick={handleClick}>
              HR Approval
              <span>
                <MdNavigateNext />
              </span>
            </li>
            <li onClick={handleClick}>
              Submit Approval
              <span>
                <MdNavigateNext />
              </span>
            </li>
            <li onClick={handleClick}>
              Completed
              <span>
                <MdNavigateNext />
              </span>
            </li>
            <li onClick={handleClick}>
              Submit
              <span>
                <MdNavigateNext />
              </span>
            </li>
          </ul>
        </div>
        {showMenu && (
          <div className='right'>
            <ProcessDetailed
              stageName={stageName}
              setStageName={setStageName}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
        )}
      </div>
    </ProcessStyled>
  );
};

export default Process;
