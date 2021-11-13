import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/FormHeader';

const ReportsStyled = styled.div`
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: #f1f5f7;
  .bottom {
    position: absolute;
    top: 250px;
    width: inherit;
    margin: 10px 20px;
    padding: 15px;
    table {
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: white;
    }

    thead {
      border-bottom: 2px solid lightgray;
    }

    table,
    tr,
    th,
    td {
      border-bottom: 2px solid lightgray;
      padding: 10px;
      border-collapse: collapse;
    }
  }
`;

const Reports = () => {
  return (
    <ReportsStyled>
      <FormHeader name='Reports' />
      <div className='bottom'>
        <table>
          <thead>
            <th>Form</th>
            <th>Last updated</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td>sample form</td>
              <td>jfankfakjf</td>
              <td>draft</td>
              <td>no action</td>
            </tr>
            <tr>
              <td>sample form</td>
              <td>jfankfakjf</td>
              <td>draft</td>
              <td>no action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ReportsStyled>
  );
};

export default Reports;
