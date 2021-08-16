import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import { getRole } from '../../reducers/authReducer';
import NavbarTeacher from '../Structure/NavbarTeacher';
import { ContainerMain, ContainerTitle, TitleAdd } from '../PanelAdmin/PanelAdminStyles';

const PanelTeacher = () => {
  const role = useSelector(getRole);
  return (
    <>
      <NavbarTeacher />
      {/* <p>
        Role :
        {role}
      </p> */}

      <ContainerMain>
        <ContainerTitle>
          <TitleAdd>Colegas</TitleAdd>
        </ContainerTitle>
        <ListarTeachers />
      </ContainerMain>

      <ContainerMain>
        <ContainerTitle>
          <TitleAdd>Cortes</TitleAdd>
        </ContainerTitle>
        <ListarCortes />
      </ContainerMain>
    </>
  );
};

export default PanelTeacher;
