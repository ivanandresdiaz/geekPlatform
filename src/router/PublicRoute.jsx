/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        // <Component {...props} />
        (isAuthenticated) ?
          (<Redirect to='/' />) :
          (<Component {...props} />)
      )}
    />
  );
};

