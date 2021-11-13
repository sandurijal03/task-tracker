import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdGrid, IoMdList } from 'react-icons/io';
import FormHeader, { Button } from '../components/FormHeader';

const SubmitFormStyled = styled.div`
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: #f1f5f7;

  h1 {
    margin: 10px 20px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;

      li {
        margin-left: 10px;
        font-size: 1.2rem;
        :hover {
          color: blue;
        }

        :active {
          color: blue;
        }
      }
    }
  }

  .middle {
    margin: 10px 20px;
    .search {
      margin: 20px 0 0 0px;
    }
    input {
      padding: 10px;
      font-size: 1.2rem;
    }
  }
  .bottom {
    position: absolute;
    top: 300px;
    left: 130;
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    table {
      width: 100%;
    }
    table,
    th,
    td {
      border-collapse: collapse;
      padding: 15px;
    }
  }
`;

const SubmitForm = () => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const handleListView = () => {
    setListView(true);
    setGridView(false);
  };

  const handleGridView = () => {
    setGridView(true);
    setListView(false);
  };

  return (
    <SubmitFormStyled>
      <FormHeader name='Submit' />
      {listView && (
        <div className='bottom'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Summary</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </SubmitFormStyled>
  );
};

export default SubmitForm;
