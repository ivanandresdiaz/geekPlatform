import React from 'react';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';

const Home = () => {

  return (
    <div>
      <h1>Home Administrador</h1>
      <AddTeachers />
      <ListarTeachers />
    </div>
  );
};

export default Home;
