import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingCard from '../../components/LoadingCard';
import FormHeader from '../components/FormHeader';

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
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 0 20px;
    background-color: white;
    table {
      width: 100%;
    }
    table,
    th,
    td {
      border-collapse: collapse;
      padding: 15px;
      border-right: 1px solid lightgray;
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .first,
    .second {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const SubmitForm = () => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  return (
    <SubmitFormStyled>
      <FormHeader
        name='Submit'
        listView={listView}
        gridView={gridView}
        setGridView={setGridView}
        setListView={setListView}
      />
      {gridView && (
        <div className='cards'>
          <div className='first'>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
          <div className='second'>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
      )}
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
