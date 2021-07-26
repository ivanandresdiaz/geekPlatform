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
      <p>Rutas publicas y privadas</p>
      <p>
        Componente funcional de Banco de recursos academicos
        conectado con el Backend
      </p>
    </div>
  );
};

export default LandingPage;
