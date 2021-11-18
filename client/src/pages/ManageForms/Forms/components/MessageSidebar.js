import React from 'react';
import styled from 'styled-components';
import {
  AiFillSetting,
  AiOutlineAntDesign,
  AiOutlineRollback,
} from 'react-icons/ai';
import { VscChecklist, VscServerProcess } from 'react-icons/vsc';
import { GrUserAdmin } from 'react-icons/gr';
import { Link, Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  width: 85%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);

  .left {
    border: 1px solid lightgray;
    ul {
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid lightgray;
        text-align: center;
        padding: 10px 10px;
        width: 100%;
        height: 80px;
        a {
          color: black;
          text-decoration: none;
          font-weight: bold;
          span {
            font-size: 0.8rem;
          }
          :hover,
          :active {
            color: blue;
          }
        }
      }
    }
  }
  .right {
    position: absolute;
    left: 100px;
    top: 20px;
    width: 90%;
    margin-left: 200px;
  }
`;

const MessageSidebar = () => {
  return (
    <Wrapper>
      <div className='left'>
        <ul>
          <li>
            <Link to='settings'>
              <AiFillSetting /> Settings
            </Link>
          </li>
          <li>
            <Link to='designer'>
              <AiOutlineAntDesign /> Designer
            </Link>
          </li>
          <li>
            <Link to='process'>
              <VscServerProcess /> Process
            </Link>
          </li>
          <li>
            <Link to='permission'>
              <GrUserAdmin /> Permission
            </Link>
          </li>
          <li>
            <Link to='reports'>
              <VscChecklist /> Reports
            </Link>
          </li>
          <li>
            <Link to='manage-forms/forms'>
              <AiOutlineRollback /> Back to forms list
            </Link>
          </li>
        </ul>
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MessageSidebar;
