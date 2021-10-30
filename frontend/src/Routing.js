import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './sections/Home';
import Login from './sections/Login';
import Register from './sections/Register';
import NotFound from './sections/NotFound';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routing;
