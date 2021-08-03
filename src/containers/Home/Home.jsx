import React from 'react';
import { useDispatch } from 'react-redux';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import Header from '../../uiComponents/Header/Header';
import { singOutAuth } from '../../actions/authActions';
import AddAdmin from '../../components/AddAdmin/AddAdmin';

const Home = () => {
  const dispatch = useDispatch();
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };

  return (
    <div>
      <Header />
      <button type='button' onClick={handleCerrarSesion}>Cerrar Sesion</button>
      <AddAdmin />
      <ListarTeachers />
    </div>
  );
};

export default Home;
