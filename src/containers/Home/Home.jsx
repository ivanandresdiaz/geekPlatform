import React from 'react';
import { useDispatch } from 'react-redux';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import Header from '../../uiComponents/Header/Header';
import { singOutAuth } from '../../actions/authActions';

const Home = () => {
  const dispatch = useDispatch();
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };

  return (
    <div>
      <Header />
      <button type='button' onClick={handleCerrarSesion}>Cerrar Sesion</button>
      <AddTeachers />
      <ListarTeachers />
    </div>
  );
};

export default Home;
