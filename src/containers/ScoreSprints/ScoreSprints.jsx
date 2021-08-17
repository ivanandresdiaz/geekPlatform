import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputRange from '../../uiComponents/InputRange/InputRange';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { DivContainerList, DivRowList, ImgStudent, DividirPantalla, ContainerPActivo, ContainerPInactivo, DivFullName, ContainerPorcentajeAsistencia, PorcentajeAsistencia, DivContainerInputCheckBox, ContainerGeekyPuntos } from './styledScoreSprints';
import { getAllSprints } from '../../reducers/salonReducer';
import Row from './Row';

const ScoreSprints = (props) => {
  const { match: { params: { sprintId } } } = props;
  const allSprints = useSelector(getAllSprints);
  const sprintArray = allSprints.filter((item) => item.id === sprintId);
  const sprint = sprintArray[0];
  const { corteId } = props;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    } if (!(allSprints.length > 0)) {
      alert('Ha ocurrido un error, Recargue la pagina y vuelva a intentar');
    }
  }, []);
  return (
    <div style={{ width: '100%' }}>
      <h1>
        Calificar sprint
        {' '}
        {sprint.title}
      </h1>
      <DividirPantalla>
        <div>
          <h3>
            {sprint.title}
          </h3>
          <img src={sprint.image} alt={sprint.title} />
          <p>{sprint.description}</p>
        </div>
        <DivContainerList>
          {studentsCorte.length > 0 && studentsCorte.map((student, index) => {
            const isCalificado = sprint.calificados.includes(student.uid);
            const mySprintsArray = Object.entries(student.mySprints);
            const mySprintSelected = mySprintsArray.filter((item) => item[1].sprintId === sprintId);
            let promedioSprint;
            if (mySprintSelected.length > 0) {
              const getScore = mySprintSelected[0];
              promedioSprint = getScore[1].calificacion;
            } else {
              promedioSprint = 0;
            }
            return (
              <Row key={student.uid} isCalificado={isCalificado} student={student} promedioSprint={promedioSprint} sprint={sprint} />
            );
          })}
        </DivContainerList>
      </DividirPantalla>
    </div>
  );
};

export default ScoreSprints;
