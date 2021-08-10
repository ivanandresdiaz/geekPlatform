import React from 'react';
import { Link } from 'react-router-dom';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';
import CreateClassroom from '../../components/CreateClassroom/CreateClassroom';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';
import Calendar from '../../components/Calendar/Calendar';

const Corte = (props) => {
  const { match: { params: { corteId } } } = props;
  return (
    <div>
      <h1>
        Corte
        {' '}
        {corteId}
      </h1>
      <div>
        <h3>Crear salon</h3>
        <Link to='/bancoRecursosAcademicos'>
          Banco de recursos Academicos LINKKK!!!
        </Link>
        <p>Listado de salones</p>
        <ListarSalones corteId={corteId} />
        <h3>Añadir estudiantes</h3>
        <AddStudents corteId={corteId} />
        <h1>Aqui va el calendario grupal(proximamente)</h1>
        <Calendar corteId={corteId} />
        <h1>Aqui va el calendario de clases (proximamente)</h1>
        <ListarStudentsCorte corteId={corteId} />

      </div>
    </div>
  );
};

export default Corte;
