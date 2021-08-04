/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/authActions';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import bancoRecursos from '../containers/BancoRecursos/BancoRecursos';
import Home from '../containers/Home/Home';
import Corte from '../containers/Corte/Corte';

const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        user.getIdTokenResult().then((idTokenResult) => {
          console.log(idTokenResult.claims);
        });
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);

      }
    });
  }, [setIsLoggedIn, dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/'
            component={Home}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/corte/:corteId'
            component={Corte}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to='/auth/landingPage' />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

