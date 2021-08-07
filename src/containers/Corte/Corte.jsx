import React from 'react';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';
import CreateClassroom from '../../components/CreateClassroom/CreateClassroom';
import ListarSalones from '../../uiComponents/ListarSalones/ListarSalones';

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
        <p>Listado de salones</p>
        <ListarSalones corteId={corteId} />
        <h3>Añadir estudiantes</h3>
        <AddStudents corteId={corteId} />
        <h1>Aqui va el calendario grupal</h1>
        <h1>Aqui va el calendario de clases</h1>
        <ListarStudentsCorte corteId={corteId} />
        <h3>Salones</h3>
      </div>
    </div>
  );
};

export default Corte;
