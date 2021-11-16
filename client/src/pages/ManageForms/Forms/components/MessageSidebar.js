import React from 'react';
import styled from 'styled-components';
import {
  AiFillSetting,
  AiOutlineAntDesign,
  AiOutlineRollback,
} from 'react-icons/ai';
import { VscChecklist, VscServerProcess } from 'react-icons/vsc';
import { GrUserAdmin } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const MessageSidebarStyled = styled.div`
  position: absolute;
  left: 100px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);
  /* z-index: 1000; */

  ul {
    list-style: none;
  }

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

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid lightgray;
    text-align: center;
    padding: 10px 10px;
    width: 80px;
    height: 80px;
  }
`;

const MessageSidebar = () => {
  return (
    <MessageSidebarStyled>
      <ul>
        <li>
          <Link to='manage-forms/form/sample/edit/:id/settings'>
            <AiFillSetting /> Settings
          </Link>
        </li>
        <li>
          <Link to='/manage-forms/form/employee-leave/edit/1/designer'>
            <AiOutlineAntDesign /> Designer
          </Link>
        </li>
        <li>
          <Link to='manage-forms/form/sample/edit/:id/process'>
            <VscServerProcess /> Process
          </Link>
        </li>
        <li>
          <Link to='manage-forms/form/sample/edit/:id/permission'>
            <GrUserAdmin /> Permission
          </Link>
        </li>
        <li>
          <Link to='manage-forms/form/sample/edit/:id/reports'>
            <VscChecklist /> Reports
          </Link>
        </li>
        <li>
          <Link to='manage-forms/forms'>
            <AiOutlineRollback /> Back to forms list
          </Link>
        </li>
      </ul>
    </MessageSidebarStyled>
  );
};

export default MessageSidebar;
