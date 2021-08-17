import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputRange from '../../uiComponents/InputRange/InputRange';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { DivContainerList, DivRowList, ImgStudent, DividirPantalla, ContainerPActivo, ContainerPInactivo, DivFullName, ContainerPorcentajeAsistencia, PorcentajeAsistencia, DivContainerInputCheckBox, ContainerGeekyPuntos } from './styledScoreSprints';
import { getAllSprints } from '../../reducers/salonReducer';
import { getFirestoreAllSprints } from '../../actions/classroomActions';
import Row from './Row';

const ScoreSprints = (props) => {
  const { match: { params: { sprintId } }, corteId, salonId } = props;
  const dispatch = useDispatch();
  const allSprints = useSelector(getAllSprints);
  const sprintArray = allSprints.filter((item) => item.id === sprintId);
  const sprint = sprintArray[0];

  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    } if (!(allSprints.length > 0)) {
      alert('esto no deberia pasar, sin embargo no preocupes, recarga la pagina');
    }
  }, []);
  if (sprintId.indexOf(' ') >= 0) {
    return (
      <div>
        <h1>Como acabaste de crear el sprint, no nos dio el tiempo de traerlo de la base de datos</h1>
        <p>No te preocupes, recarga la pagina y todo seguira bien</p>
      </div>
    );
  }
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
