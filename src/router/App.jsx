/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/authActions';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import PanelAdministrador from '../containers/PanelAdministrador/PanelAdministrador';
import bancoRecursosAcademicos from '../containers/BancoRecursosAcademicos/BancoRecursosAcademicos';
import Login from '../containers/Login/Login';
import LandingPage from '../containers/LandingPage/LandingPage';

const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        dispatch(login(user.uid, user.displayName));
        console.log('si hay usuarios');
        setIsLoggedIn(true);
        console.log('logged de si hay', isLoggedIn);
      } else {
        console.log('logged no hay', isLoggedIn);
        setIsLoggedIn(false);

      }
    });
  }, [setIsLoggedIn, dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route
            exact
            path='/auth/landingPage'
            component={LandingPage}
          />
          <Route
            exact
            path='/auth/login'
            component={Login}
          />

          <Redirect to='/auth/landingPage' /> */}
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/'
            component={bancoRecursosAcademicos}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to='/auth/landingPage' />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

