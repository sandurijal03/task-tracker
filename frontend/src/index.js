import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

import { GlobalStyle } from './styles';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routing />
  </BrowserRouter>,
  root,
);
