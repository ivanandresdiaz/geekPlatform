import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DivContainerList, DivContainerButtons, DivContainerGridDetails, ButtonCalificar, DivRowList, ImgStudent, DivTopicScore, ContainerPActivo, ContainerPInactivo, DivFullName, ContainerPorcentajeCalificacion, PorcentajeCalificacion, DivContainerInputCheckBox, ContainerGeekyPuntos, ButtonReprobar } from './styledListarRetosCodelingoCalificar';
import './RowCalificar.scss';
import InputRange from '../InputRange/InputRange';
import { calificarSprintStudent } from '../../actions/classroomActions';
import { aprobadoRetoCodelingo } from '../../actions/codelingoActions';
import useForm from '../../hooks/useForm';

const Row = (props) => {
  const { challenge, dataChallengeToScore } = props;
  const [calificaciones, setCalificaciones] = useState({});
  const [isCalificado, setIsCalificado] = useState(false);
  const dispatch = useDispatch();
  const { firebase, html, css, javascript, webpack, id, reactHooks, reactJs, redux, testing, title, link, geekyPuntos } = challenge;
  const { fullName, uid, linkGithub, linkDespliegue, photoURL } = dataChallengeToScore;
  console.log('dataChallengeToScore', dataChallengeToScore);
  const handleInputRangeChangeFather = (name, value) => {
    setCalificaciones({
      ...calificaciones,
      [name]: value,
    });
  };
  const [formValues, handleInputChange, reset] = useForm({
    comentarios: '',
  });
  const { comentarios } = formValues;

  const handleCalificarSprint = () => {
    //enviar los geekyPuntos, enviar los promedios a uid, y agregar a hechos en uid
    dispatch(aprobadoRetoCodelingo(calificaciones, uid, id, geekyPuntos, comentarios, dataChallengeToScore.id));
    setIsCalificado(true);
  };
  const handleReprobarReto = () => {
    console.log('retro reporbado');
  };
  if (isCalificado) {
    return null;
  }
  return (
    <>
      <details>
        <DivRowList>
          <DivFullName>
            {photoURL ? <ImgStudent src={photoURL} alt={fullName} /> : <ImgStudent src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={fullName} />}
            <p>
              {fullName}
            </p>
          </DivFullName>
          <h3>{title}</h3>
        </DivRowList>
        <div className='content'>

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
          <DivContainerGridDetails>
            <textarea name='comentarios' placeholder='comentarios sobre el trabajo' value={comentarios} onChange={handleInputChange} />
            <div>
              <a href={linkDespliegue}>Link de despliegue</a>
              <a href={linkGithub}>Link de github </a>
              <a href={link}>Link del reto asignado</a>
              <p>
                GeekyPuntos
                {' '}
                <span>
                  +
                  {geekyPuntos}
                </span>

              </p>
            </div>
          </DivContainerGridDetails>
          <DivContainerButtons>
            <ButtonReprobar type='button' onClick={handleReprobarReto}>Reprobar</ButtonReprobar>
            <ButtonCalificar type='button' onClick={() => handleCalificarSprint()}>Aprobar</ButtonCalificar>

          </DivContainerButtons>

        </div>

      </details>
    </>
  );
};

export default Row;
