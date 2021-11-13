import React from 'react';
import styled from 'styled-components';
import { Switch } from 'antd';

const ReportsStyled = styled.div`
  position: absolute;
  left: 150px;
`;

const Reports = () => {
  return (
    <ReportsStyled>
      <p>Form reports</p>
      <div>
        <p>
          <Switch />
        </p>
      </div>
    </ReportsStyled>
  );
};

export default Reports;
