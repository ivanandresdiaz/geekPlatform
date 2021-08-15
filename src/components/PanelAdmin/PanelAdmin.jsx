import React, { Suspense, lazy, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ListarAdmin from '../../uiComponents/ListarAdmin/ListarAdmin';
import ListarTeachers from '../../uiComponents/ListarTeachers/ListarTeachers';
import ListarCortes from '../../uiComponents/ListarCortes/ListarCortes';
import { getRole } from '../../reducers/authReducer';
import NavbarAdmin from '../Structure/NavbarAdmin';
import { ButtonAdd, ButtonImgAdd, ButtonImgAddCortes, ContainerContentLoading, ContainerMain, ContainerTitle, TitleAdd } from './PanelAdminStyles';
import { Modal, ModalCortes, ModalTeacher } from '../../uiComponents/Modal/Modal';

const PanelAdmin = () => {

  const role = useSelector(getRole);
  const [showModal, setShowModal] = useState(false);
  const [showModalT, setShowModalT] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const OpenModal = () => { setShowModal((prev) => !prev); };
  const OpenModalT = () => { setShowModalT((prevT) => !prevT); };
  const OpenModalC = () => { setShowModalC((prevC) => !prevC); };

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
          <TitleAdd>Administradores</TitleAdd>
          <ButtonAdd animate={{}} onClick={OpenModal}>
            <ButtonImgAdd />
          </ButtonAdd>
        </ContainerTitle>
        <ListarAdmin />
      </ContainerMain>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Sección agregar profesores */}
      <ContainerMain>
        <ContainerTitle>
          <TitleAdd>Profesores</TitleAdd>
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
          <TitleAdd>Cortes</TitleAdd>
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
