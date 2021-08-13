import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';
import CreateClassroom from '../../components/CreateClassroom/CreateClassroom';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import { ContainerAddStudentCorte, ContainerMainClass, ContainerMainCorte, ContainerSub1Corte, ContainerSub2Corte, ContainerTitleCorte } from './CorteStyles';
import { Img } from '../../styles/PresentationStyles';
import imgcorte from '../../images/other/corte.png';
import { ModalEstudiantes } from '../../uiComponents/Modal/Modal';
import { ButtonAdd, ButtonImgAdd } from '../../components/PanelAdmin/PanelAdminStyles';
import { requestWeekStudent, cancelRequestWeekStudent } from '../../actions/geekyPuntos';

const Corte = (props) => {
  const dispatch = useDispatch();
  const { match: { params: { corteId } } } = props;
  const [showModalE, setShowModalE] = useState(false);
  const OpenModalE = () => { setShowModalE((prevE) => !prevE); };
  const handleRequestWeekStudent = () => {
    dispatch(requestWeekStudent(corteId));
  };
  const handleCancelRequestWeekStudent = () => {
    dispatch(cancelRequestWeekStudent(corteId));
  };
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
            <img src={imgcorte} alt='corte Imagen' />
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
      <button type='button' onClick={handleRequestWeekStudent}>activar Eleccion del estudiante de la semana</button>
      <button type='button' onClick={handleCancelRequestWeekStudent}>desactivar del estudiante de la semana</button>
      <ModalEstudiantes corteId={corteId} showModalE={showModalE} setShowModalE={setShowModalE} />
      <ListarStudentsCorte corteId={corteId} />
      <Footer />
    </>
  );
};

export default Corte;
