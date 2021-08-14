import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
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
import { getFirestoreCorteDataDetails } from '../../actions/adminActions';
import { getCorteDataDetails } from '../../reducers/salonReducer';

const Corte = (props) => {
  const dispatch = useDispatch();
  const corteDataDetails = useSelector(getCorteDataDetails);
  const { match: { params: { corteId } } } = props;
  const [showModalE, setShowModalE] = useState(false);
  const OpenModalE = () => { setShowModalE((prevE) => !prevE); };
  useEffect(() => {
    dispatch(getFirestoreCorteDataDetails(corteId));
  }, []);
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
      <div>
        <p>{corteDataDetails.choosingWeekStudent ? 'Esta activa la eleccion de Estudiante de la semana' : 'No esta activa la eleccion de Estudiante de la semana'}</p>
        <button type='button' onClick={handleRequestWeekStudent}>activar Eleccion del estudiante de la semana</button>
        <button type='button' onClick={handleCancelRequestWeekStudent}>desactivar del estudiante de la semana</button>
      </div>

      <ModalEstudiantes corteId={corteId} showModalE={showModalE} setShowModalE={setShowModalE} />
      <ListarStudentsCorte corteId={corteId} />
      <Footer />
    </>
  );
};

export default Corte;
