import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const AppStyled = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppStyled>
      <h1>hello world</h1>
    </AppStyled>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
