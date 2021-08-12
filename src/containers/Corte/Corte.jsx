import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';
import CreateClassroom from '../../components/CreateClassroom/CreateClassroom';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import { ContainerAddStudentCorte, ContainerMainClass, ContainerMainCorte, ContainerSub1Corte, ContainerSub2Corte, ContainerTitleCorte } from './CorteStyles';
import { Img } from '../../styles/PresentationStyles';
import imgcorte from '../../images/other/corte.png'
import { ModalEstudiantes } from '../../uiComponents/Modal/Modal';
import { ButtonAdd, ButtonImgAdd } from '../../components/PanelAdmin/PanelAdminStyles';

const Corte = (props) => {
  const { match: { params: { corteId } } } = props;
  const [showModalE, setShowModalE] = useState(false);
  const OpenModalE = () => { setShowModalE((prevE) => !prevE); };
  return (
    <>
      <NavbarAdmin />
      <ContainerMainCorte>
        <ContainerSub1Corte>
          <ContainerTitleCorte>
            <h1>
              {' '}
              {corteId}
            </h1>
            <img src={imgcorte} />
          </ContainerTitleCorte>
          <ContainerMainClass>
            <ListarSalones corteId={corteId} />
          </ContainerMainClass>
          <ContainerAddStudentCorte>
            <h1>Añadir estudiantes</h1>
            <ButtonAdd animate={{}} onClick={OpenModalE}>
              <ButtonImgAdd />
            </ButtonAdd>
          </ContainerAddStudentCorte>
        </ContainerSub1Corte>
        <ContainerSub2Corte>
          <Calendar corteId={corteId} />
        </ContainerSub2Corte>
      </ContainerMainCorte>
      <ModalEstudiantes corteId={corteId} showModalE={showModalE} setShowModalE={setShowModalE} />
      {/* <ListarStudentsCorte corteId={corteId} /> */}
      <Footer />
    </>
  );
};

export default Corte;
