import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DivContainerList, ButtonCalificar, DivRowList, ImgStudent, DivTopicScore, ContainerPActivo, ContainerPInactivo, DivFullName, ContainerPorcentajeCalificacion, PorcentajeCalificacion, DivContainerInputCheckBox, ContainerGeekyPuntos } from './styledScoreSprints';
import './Row.scss';
import InputRange from '../../uiComponents/InputRange/InputRange';
import { Button4 } from '../../globalStyles';
import { calificarSprintStudent } from '../../actions/classroomActions';

const Row = (props) => {
  const { isCalificado, student, promedioSprint, sprint } = props;
  // let state = {};
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const [estaCalificado, setEstaCalificado] = useState(isCalificado);
  const [porcentajeCalificacion, setPorcentajeCalificacion] = useState(promedioSprint);
  const { firebase, html, css, javascript, webpack, id, reactHooks, reactJs, redux, testing, title } = sprint;
  const handleInputRangeChangeFather = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleCalificarSprint = (uid) => {
    const newState = state;
    const stateArray = Object.entries(newState);
    if (stateArray.length > 0) {
      const getNumbers = stateArray.map((item) => parseInt(item[1]));
      const calificacionSprint = Math.round((getNumbers.reduce((a, b) => a + b, 0) / getNumbers.length));
      dispatch(calificarSprintStudent(id, uid, state, calificacionSprint, sprint.corteId, sprint.salonId, sprint.title));
      setPorcentajeCalificacion(calificacionSprint);
      setEstaCalificado(true);
    } else {
      alert('no has calificado');
    }

  };
  return (
    <>
      <details>
        <DivRowList>
          <DivFullName>
            {student.photoURL ? <ImgStudent src={student.photoURL} alt={student.fullName} /> : <ImgStudent src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={student.fullName} />}
            <p>
              {student.fullName}
            </p>
          </DivFullName>
          {estaCalificado ? (<ContainerPActivo><p>Calificado</p></ContainerPActivo>) : <ContainerPInactivo><p>No calificado</p></ContainerPInactivo>}

          {porcentajeCalificacion && (
            <ContainerPorcentajeCalificacion>
              <PorcentajeCalificacion porcentajeCalificacion={porcentajeCalificacion}>
                <p>
                  {porcentajeCalificacion}
                </p>
              </PorcentajeCalificacion>
            </ContainerPorcentajeCalificacion>
          ) }
        </DivRowList>

        <div className='content'>
          {estaCalificado ? <h3>Editar calificacion</h3> : <h3>Desempeño en las siguientes habilidades:</h3> }
          {html && (
            <DivTopicScore>
              Html
              <InputRange handleInputRangeChangeFather={handleInputRangeChangeFather} name='html' />
            </DivTopicScore>
          )}
          {css && (
            <DivTopicScore>
              Css
              <InputRange name='css' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {javascript && (
            <DivTopicScore>
              Javascript
              <InputRange name='javascript' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {webpack && (
            <DivTopicScore>
              webpack
              <InputRange name='webpack' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {reactJs && (
            <DivTopicScore>
              reactJs
              <InputRange name='reactJs' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {reactHooks && (
            <DivTopicScore>
              reactHooks
              <InputRange name='reactHooks' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {redux && (
            <DivTopicScore>
              Redux
              <InputRange name='redux' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {firebase && (
            <DivTopicScore>
              Firebase
              <InputRange name='firebase' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          {testing && (
            <DivTopicScore>
              testing
              <InputRange name='testing' handleInputRangeChangeFather={handleInputRangeChangeFather} />
            </DivTopicScore>
          )}
          <ButtonCalificar style={{ margin: '0 8px', marginTop: '15px' }} whileHover={{ scale: 1.050 }} type='button' onClick={() => handleCalificarSprint(student.uid)}>Enviar Calificacion</ButtonCalificar>
          <p>no es necesario calificar todas la categorias. lo importante es que lo que sea calificado sea un numero idoneo para el desempeño del estudiante</p>
        </div>

      </details>
    </>
  );
};

export default Row;
