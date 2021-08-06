import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarAdmin from '../../uiComponents/ListarAdmin/ListarAdmin';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import AddTeachers from '../AddTeachers/AddTeachers';
import CreateCorte from '../CreateCorte/CreateCorte';
import { getCortes } from '../../reducers/adminReducer';
import { getRole } from '../../reducers/authReducer';
import NavbarAdmin from '../Structure/NavbarAdmin';
import { ButtonAdd, ButtonImgAdd, ContainerList, ContainerTitle } from './PanelAdminStyles';
import { Modal } from '../../uiComponents/Modal/Modal';
import GlobalStyle from '../../globalStyles';
import { Background } from '../../uiComponents/Modal/ModalStyles';


const PanelAdmin = () => {

  const role = useSelector(getRole);
  const [showModal, setShowModal] = useState(false)
  const OpenModal = () => { setShowModal(prev => !prev) }

  return (
    <>
      <NavbarAdmin />
      <p>
        Role :
        {role}
      </p>
      <ContainerTitle>
        <h2>Administradores</h2>
        <ButtonAdd onClick={OpenModal}>
          <ButtonImgAdd />
        </ButtonAdd>
      </ContainerTitle>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ContainerList>
        <ListarAdmin />
      </ContainerList>
      <h2>Profesores</h2>
      <AddTeachers />
      <ContainerList>
        <ListarTeachers />
      </ContainerList>
      <CreateCorte />
      <ContainerList>
        <ListarCortes />
      </ContainerList>

    </>
  );
};

export default PanelAdmin;
