import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarAdmin from '../../uiComponents/ListarAdmin/ListarAdmin';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddTeachers from '../AddTeachers/AddTeachers';
import CreateCorte from '../CreateCorte/CreateCorte';
import { getCortes } from '../../reducers/adminReducer';
import { getRole } from '../../reducers/authReducer';

const PanelAdmin = () => {
  const role = useSelector(getRole);
  return (
    <div>
      <p>
        Role :
        {role}
      </p>
      <h2>crear administradores</h2>
      <AddAdmin />
      <ListarAdmin />
      <h2>Crear profesores</h2>
      <AddTeachers />
      <ListarTeachers />
      <CreateCorte />
      <ListarCortes />
    </div>
  );
};

export default PanelAdmin;
