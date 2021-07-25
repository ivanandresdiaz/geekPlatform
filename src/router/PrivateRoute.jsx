/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      component={(props) => (
        (isAuthenticated) ?
          (<Component {...props} />) :
          (<Redirect to='/auth/landingPage' />)
      )}
    />
  );
};
