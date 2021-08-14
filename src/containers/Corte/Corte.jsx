import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import { ContainerAddStudentCorte, ContainerMainCorte, ContainerMainTitleCorte, ContainerWrapCorte, ContainerWrap2Corte, ContainerTitleCorte, ContainerImgCorte, ContainerIconsCorte, ContainerClassrooms, ContainerStudentCorte } from './CorteStyles';
import { Img } from '../../styles/PresentationStyles';
import imgcorte from '../../images/other/corte.png';
import ico from '../../images/other/icon.png'
import ico1 from '../../images/other/icon-1.png'
import ico2 from '../../images/other/icon-2.png'
import ico3 from '../../images/other/icon-3.png'
import student from '../../images/other/student.png'
import { ModalEstudiantes } from '../../uiComponents/Modal/Modal';
import { ButtonAdd, ButtonImgAdd } from '../../components/PanelAdmin/PanelAdminStyles';
import { requestWeekStudent, cancelRequestWeekStudent } from '../../actions/geekyPuntos';
import { motion } from 'framer-motion';

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
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <NavbarAdmin />

        <div>
          <ContainerMainTitleCorte>
            <ContainerTitleCorte>
              <motion.div initial={{ y: -300 }} animate={{ y: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 50 }}>
                <h1>{' '}{corteId}</h1>
              </motion.div>
              {/* Acá va la descripción de la corte, solo es un ejemplo */}
              <motion.div initial={{ x: 300 }} animate={{ x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 60 }} >
                <p>Aprenderás a construir lo que ven y utilizan los usuarios en los sitios, aplicaciones y otras soluciones web, usando las metodologías y herramientas que las empresas utilizan
                  Te harás fuerte en HTML-CSS, bootstrap, material design, Javascript entre otros. Potenciaremos tus habilidades para el siglo XXI, te daremos orientación laboral y te acompañaremos en la consecución de empleo. </p>
              </motion.div>
              <ContainerIconsCorte>
                <motion.div initial={{ x: -300 }} animate={{ x: 0 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 40 }} >
                  <img src={ico} alt='Icon1' />
                </motion.div>
                <motion.div initial={{ x: -300 }} animate={{ x: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 40 }}>
                  <img src={ico1} alt='Icon2' />
                </motion.div>
                <motion.div initial={{ x: -300 }} animate={{ x: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 40 }}>
                  <img src={ico2} alt='Icon3' />
                </motion.div>
                <motion.div initial={{ x: -300 }} animate={{ x: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 40 }}>
                  <img src={ico3} alt='Icon4' />
                </motion.div>
              </ContainerIconsCorte>
            </ContainerTitleCorte>
            <ContainerImgCorte>
              <motion.div initial={{ x: 300 }} animate={{ x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 70 }}>
                <img src={imgcorte} alt='corte Imagen' />
              </motion.div>
            </ContainerImgCorte>
          </ContainerMainTitleCorte>
          <ContainerMainCorte>
            <ContainerWrapCorte>

              <ContainerClassrooms>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ContainerWrapCorte>
                    <ListarSalones corteId={corteId} />
                  </ContainerWrapCorte>
                  <ContainerStudentCorte>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      <div>
                        <h2>Estudiante de la semana</h2>
                      </div>
                      <div>
                        <img src={student} alt="" />
                      </div>
                    </div>
                  </ContainerStudentCorte>
                </div>
              </ContainerClassrooms>
              <ContainerWrap2Corte>
                <Calendar corteId={corteId} />
              </ContainerWrap2Corte>
            </ContainerWrapCorte>
          </ContainerMainCorte>
          <p>{corteDataDetails.choosingWeekStudent ? 'Esta activa la eleccion de Estudiante de la semana' : 'No esta activa la eleccion de Estudiante de la semana'}</p>
          <button type='button' onClick={handleRequestWeekStudent}>activar Eleccion del estudiante de la semana</button>
          <button type='button' onClick={handleCancelRequestWeekStudent}>desactivar del estudiante de la semana</button>
          <ListarStudentsCorte corteId={corteId} />
          <ModalEstudiantes corteId={corteId} showModalE={showModalE} setShowModalE={setShowModalE} />
          <ContainerAddStudentCorte>
            <h1>Añadir estudiantes</h1>
            <ButtonAdd animate={{}} onClick={OpenModalE}>
              <ButtonImgAdd />
            </ButtonAdd>
          </ContainerAddStudentCorte>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Corte;
