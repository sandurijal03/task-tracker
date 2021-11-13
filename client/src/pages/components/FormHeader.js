import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdGrid } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';

const FormHeaderStyled = styled.div`
  h1 {
    margin: 10px 20px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        font-size: 1.2rem;
        margin-right: 10px;
        :hover {
          color: blue;
        }

        :active {
          color: blue;
        }
      }
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    select {
      padding: 10px;
      background-color: white;
      font-size: 1.2rem;
    }
    .main-left {
      input {
        outline: none;
        padding: 10px;
        font-size: 1.2rem;
      }
      button {
        padding: 10px;
        width: 3rem;
        font-size: 1.2rem;
        color: blue;
      }
    }
    .main-right {
      span {
        margin-right: 10px;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: lightblue;
  color: blue;
  padding: 10px;
  margin: 10px 20px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;

const DesignFormButton = styled.button`
  padding: 4px;
  color: white !important;
  background-color: purple;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  a {
    color: white;
  }
`;

const FormHeader = ({ name }) => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const handleListView = () => {
    setListView(true);
    setGridView(false);
  };

  const handleGridView = () => {
    setGridView(true);
    setListView(true);
  };

  return (
    <FormHeaderStyled>
      <div className='top'>
        <h1>{name}</h1>
        <ul className='icons'>
          {name === 'All Forms' ? (
            <DesignFormButton>
              <Link to='/manage-forms/forms/select-template'>
                + design a new form
              </Link>
            </DesignFormButton>
          ) : null}
          <li onClick={handleGridView}>
            <IoMdGrid />
          </li>
          <li onClick={handleListView}>
            <UnorderedListOutlined />
          </li>
        </ul>
      </div>
      <div className='main'>
        <div className='main-left'>
          <select>
            <option>Draft</option>
            <option>Archive</option>
            <option>Published</option>
          </select>
          <input type='text' placeholder='search' />
          <button>
            <SearchOutlined />
          </button>
        </div>
        <div className='main-right'>
          <span>show entries</span>
          <select>
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>
      <Button>ALL</Button>
    </FormHeaderStyled>
  );
};

export default FormHeader;
