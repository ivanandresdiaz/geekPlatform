import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DivContainerList, DivContainerButtons, DivContainerGridDetails, ButtonCalificar, DivRowList, ImgStudent, DivTopicScore, ContainerPActivo, ContainerPInactivo, DivFullName, ContainerPorcentajeCalificacion, PorcentajeCalificacion, DivContainerInputCheckBox, ContainerGeekyPuntos, ButtonReprobar } from './styledListarRetosCodelingoCalificar';
import './RowCalificar.scss';
import InputRange from '../InputRange/InputRange';
import { calificarSprintStudent } from '../../actions/classroomActions';

const Row = (props) => {
  const { challenge, dataChallengeToScore } = props;
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const { firebase, html, css, javascript, webpack, id, reactHooks, reactJs, redux, testing, title, link, geekyPuntos } = challenge;
  const { fullName, uid, linkGithub, linkDespliegue, photoURL } = dataChallengeToScore;
  const handleInputRangeChangeFather = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleInputChangeTextArea = (evento) => {
    handleInputRangeChangeFather(evento.target.name, evento.target.value);
  };
  const handleCalificarSprint = () => {
    console.log('reto aprobado');
    console.log(state, uid, id);
  };
  const handleReprobarReto = () => {
    console.log('retro reporbado');
  };
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
            <textarea name='comentarios' placeholder='comentarios sobre el trabajo' onChange={handleInputChangeTextArea} />
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
            <ButtonCalificar type='button' onClick={() => handleCalificarSprint(student.uid)}>Aprobar</ButtonCalificar>

          </DivContainerButtons>

        </div>

      </details>
    </>
  );
};

export default Row;
