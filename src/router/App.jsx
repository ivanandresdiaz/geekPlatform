import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Registrarse from '../containers/Registrarse/Registrarse';
import Profile from '../containers/Profile/Profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/registrarse' component={Registrarse} />
          <Route exact path='/perfil' component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

