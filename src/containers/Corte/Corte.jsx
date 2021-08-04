import React from 'react';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';
import AddStudents from '../../components/AddStudents/AddStudents';

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
        <h3>Añadir estudiantes</h3>
        <AddStudents corteId={corteId} />
        <ListarStudentsCorte corteId={corteId} />
      </div>
    </div>
  );
};

export default Corte;
