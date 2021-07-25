/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../containers/Login/Login';
import LandingPage from '../containers/LandingPage/LandingPage';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
          <Route
            exact
            path='/auth/landingPage'
            component={LandingPage}
          />
          <Route
            exact
            path='/auth/login'
            component={Login}
          />

          <Redirect to='/auth/landingPage' />

        </Switch>
      </div>

    </div>
  );
};
