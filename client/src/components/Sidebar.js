import React from 'react';
import {
  MdOutlineSpaceDashboard,
  MdTaskAlt,
  MdListAlt,
  MdOutlinePushPin,
} from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { AiOutlineForm } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarStyled = styled.div`
  position: absolute;
  left: 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);

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

const Sidebar = () => {
  return (
    <SidebarStyled>
      <ul>
        <li>
          <Link to='/dashboard'>
            <MdOutlineSpaceDashboard className='comp' />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/submit-form'>
            <AiOutlineForm className='comp' />
            <span>start form</span>
          </Link>
        </li>
        <li>
          <Link to='/tasks'>
            <MdTaskAlt className='comp' />
            <span>my tasks</span>
          </Link>
        </li>
        <li>
          <Link to='/submissions'>
            <MdListAlt className='comp' />
            <span>my submissions</span>
          </Link>
        </li>
        <li>
          <Link to='/manage-forms/forms'>
            <MdOutlineSpaceDashboard className='comp' />
            <span>design a form</span>
          </Link>
        </li>
        <li>
          <Link to='/manage-forms/submissions'>
            <MdOutlinePushPin className='comp' />
            <span>all submissions</span>
          </Link>
        </li>
        <li>
          <Link to='/manage-forms/reports'>
            <HiDocumentReport className='comp' />
            <span>reports</span>
          </Link>
        </li>
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
