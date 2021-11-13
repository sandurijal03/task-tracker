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

const MessageSidebarStyled = styled.ul`
  position: absolute;
  left: 10px;
  list-style: none;
  width: 120px;
  border: 2px solid;

  li {
    border: 2px solid;
    padding: 10px;
    margin: 10px;
    :active {
    color: blue;
    }
  }
`;

const MessageSidebar = () => {
  return (
    <MessageSidebarStyled>
      <li>
        <Link to='manage-forms/form/sample/edit/:id/settings'>
          <AiFillSetting /> Settings
        </Link>
      </li>
      <li>
        <Link to='manage-forms/form/sample/edit/:id/designer'>
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
    </MessageSidebarStyled>
  );
};

export default MessageSidebar;
