import React from 'react';
import { Link } from 'react-router-dom';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';
import CreateClassroom from '../../components/CreateClassroom/CreateClassroom';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import { ContainerMainClass, ContainerMainCorte, ContainerSub1Corte, ContainerTitleCorte } from './CorteStyles';
import { Img } from '../../styles/PresentationStyles';
import imgcorte from '../../images/other/corte.png'

const Corte = (props) => {
  const { match: { params: { corteId } } } = props;
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
        </ContainerSub1Corte>
        <ContainerSub1Corte>
          <Calendar corteId={corteId} />
        </ContainerSub1Corte>

      </ContainerMainCorte>

      <div>
        <Link to='/bancoRecursosAcademicos'>
          Banco de recursos Academicos LINKKK!!!
        </Link>

        <h3>Añadir estudiantes</h3>
        <AddStudents corteId={corteId} />
        {/* <h1>Aqui va el calendario grupal(proximamente)</h1>

        <h1>Aqui va el calendario de clases (proximamente)</h1> */}
        <ListarStudentsCorte corteId={corteId} />
      </div>
      <Footer />
    </>
  );
};

export default Corte;
