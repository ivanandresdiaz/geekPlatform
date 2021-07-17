import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesion } from '../../actions/logActions';

const Profile = (props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.login.activeUser);
  const handleCerrarSesion = () => {
    dispatch(cerrarSesion());
    alert('sesion Cerrada');
    props.history.push('/');
  };
  return (
    <>
      <h1>
        Bienvenido
        {' '}
        {activeUser.name}
      </h1>
      <p>
        Felicitaciones, has logrado crear tu nuevo usuario
        {' '}
        {' '}
        {activeUser.name}
        {' '}
        {' '}
        {' '}
        usando Redux
      </p>
      <button type='button' onClick={handleCerrarSesion}>Cerrar session</button>
      {!activeUser.active && <Redirect to='/' />}

    </>
  );
};

export default Profile;
