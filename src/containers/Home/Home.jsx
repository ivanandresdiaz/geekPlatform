import React from 'react';
import { useDispatch } from 'react-redux';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import { singOutAuth } from '../../actions/authActions';

const Home = () => {
  const dispatch = useDispatch();
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };

  return (
    <div>
      <h1>Home Administrador</h1>
      <button type='button' onClick={handleCerrarSesion}>Cerrar Sesion</button>
      <AddTeachers />
      <ListarTeachers />
    </div>
  );
};

export default Home;
