import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>LandingPage</h1>
      <p>Proximante estara disponible</p>
      <Link to='/auth/login'>
        <button type='button'>Iniciar sesion</button>
      </Link>

    </div>
  );
};

export default LandingPage;
