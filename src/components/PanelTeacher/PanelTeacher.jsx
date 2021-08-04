import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import { getRole } from '../../reducers/authReducer';

const PanelTeacher = () => {
  const role = useSelector(getRole);
  return (
    <div>
      <p>
        Role :
        {role}
      </p>
      <h1>Panel Teacher</h1>
      <ListarTeachers />
      <ListarCortes />
    </div>
  );
};

export default PanelTeacher;
