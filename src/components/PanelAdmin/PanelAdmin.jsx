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
import { ButtonAdd, ButtonImgAdd, ButtonImgAddCortes, ContainerMain, ContainerTitle } from './PanelAdminStyles';
import { Modal, ModalCortes, ModalTeacher } from '../../uiComponents/Modal/Modal';

const PanelAdmin = () => {

  const role = useSelector(getRole);
  const [showModal, setShowModal] = useState(false)
  const [showModalT, setShowModalT] = useState(false)
  const [showModalC, setShowModalC] = useState(false)
  const OpenModal = () => { setShowModal(prev => !prev) }
  const OpenModalT = () => { setShowModalT(prevT => !prevT) }
  const OpenModalC = () => { setShowModalC(prevC => !prevC) }

  return (
    <>
      <NavbarAdmin />
      {/* <p>
        Role :
        {role}
      </p> */}

      {/* Sección agregar administradores */}
      <ContainerMain>
        <ContainerTitle>
          <h2>Administradores</h2>
          <ButtonAdd onClick={OpenModal}>
            <ButtonImgAdd />
          </ButtonAdd>
        </ContainerTitle>
        <ListarAdmin />
      </ContainerMain>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Sección agregar profesores */}
      <ContainerMain>
        <ContainerTitle>
          <h2>Profesores</h2>
          <ButtonAdd onClick={OpenModalT}>
            <ButtonImgAdd />
          </ButtonAdd>
        </ContainerTitle>
        <ListarTeachers />
      </ContainerMain>
      <ModalTeacher showModalT={showModalT} setShowModalT={setShowModalT} />

      {/* Sección agregar cortes */}

      <ContainerMain>
        <ContainerTitle>
          <h2>Cortes</h2>
          <ButtonAdd onClick={OpenModalC}>
            <ButtonImgAddCortes />
          </ButtonAdd>
        </ContainerTitle>
        <ListarCortes />
      </ContainerMain>
      <ModalCortes showModalC={showModalC} setShowModalC={setShowModalC} />

    </>
  );
};

export default PanelAdmin;
