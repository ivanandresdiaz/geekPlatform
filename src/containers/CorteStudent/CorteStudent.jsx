import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import { getCorteId, getUserId } from '../../reducers/authReducer';
import ListarStudentsToVote from '../../uiComponents/ListarStudentsToVote/ListarStudentsToVote';
import { ContainerClassrooms, ContainerIconsCorte, ContainerImgCorte, ContainerMainCorte, ContainerMainTitleCorte, ContainerStudentCorte, ContainerStudentImgCorte, ContainerStudentLista, ContainerStudentTextCorte, ContainerTitleCorte, ContainerWrap2Corte, ContainerWrapCorte } from '../Corte/CorteStyles';
import imgcorte from '../../images/other/corte.png';
import ico from '../../images/other/icon.png';
import ico1 from '../../images/other/icon-1.png';
import ico2 from '../../images/other/icon-2.png';
import ico3 from '../../images/other/icon-3.png';

const CorteStudent = (props) => {
  const corteId = useSelector(getCorteId);
  const loggedUserId = useSelector(getUserId);
  const loggedUserVoted = useSelector((state) => state.auth.voted);
  return (
    <>
      <div>
        <ContainerMainTitleCorte>
          <ContainerTitleCorte>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 50 }}
            >
              <h1>
                {' '}
                {corteId}
              </h1>
            </motion.div>
            {/* Acá va la descripción de la corte, solo es un ejemplo */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 60 }}
            >
              <p>
                Aprenderás a construir lo que ven y utilizan los usuarios en los sitios, aplicaciones y otras soluciones web, usando las metodologías y herramientas que las empresas utilizan
                Te harás fuerte en HTML-CSS, bootstrap, material design, Javascript entre otros. Potenciaremos tus habilidades para el siglo XXI, te daremos orientación laboral y te acompañaremos en la consecución de empleo.
                {' '}
              </p>
            </motion.div>
            <ContainerIconsCorte>
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 40 }}
              >
                <img src={ico} alt='Icon1' />
              </motion.div>
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 40 }}
              >
                <img src={ico1} alt='Icon2' />
              </motion.div>
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 40 }}
              >
                <img src={ico2} alt='Icon3' />
              </motion.div>
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 40 }}
              >
                <img src={ico3} alt='Icon4' />
              </motion.div>
            </ContainerIconsCorte>
          </ContainerTitleCorte>
          <ContainerImgCorte>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 70 }}
            >
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

              </div>
            </ContainerClassrooms>
            <ContainerWrap2Corte>
              <Calendar corteId={corteId} />
            </ContainerWrap2Corte>
          </ContainerWrapCorte>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%' }}>
              <ContainerStudentLista>
                <ListarStudentsCorte corteId={corteId} />
                {loggedUserVoted && <ListarStudentsToVote />}
              </ContainerStudentLista>
            </div>
          </div>
        </ContainerMainCorte>
        <Link to='/socialGeek'> Social Geek Link !!!</Link>
        <Link to='/bancoRecursosAcademicos'> Social Geek Link !!!</Link>
      </div>
    </>
  );
};

export default CorteStudent;
