import React from 'react';
import styled from 'styled-components';
import FormHeader from '../components/FormHeader';

const TasksStyled = styled.div`
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: #f1f5f7;
`;

const Tasks = () => {
  return (
    <TasksStyled>
      <FormHeader name='Tasks' />
    </TasksStyled>
  );
};

export default Tasks;
