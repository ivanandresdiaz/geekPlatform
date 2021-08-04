import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import Header from '../../uiComponents/Header/Header';
import { getFirestoreCortes } from '../../actions/adminActions';
import { singOutAuth } from '../../actions/authActions';
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import CreateCorte from '../../components/CreateCorte/CreateCorte';
import { getCortes } from '../../reducers/adminReducer';

const Home = () => {

  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };

  return (
    <div>
      <Header />
      <button type='button' onClick={handleCerrarSesion}>Cerrar Sesion</button>
      <AddAdmin />
      <AddTeachers />
      <CreateCorte />
      <ListarCortes />
    </div>
  );
};

export default Home;
