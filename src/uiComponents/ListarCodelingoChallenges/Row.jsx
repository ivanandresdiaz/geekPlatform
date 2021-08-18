import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import './Row.scss';
import { enviarChallengeCodelingoDone, deleteFirestoreCodelingoChallenge } from '../../actions/codelingoActions';
import { DivContent, ContainerPInactivo, DivButtonsActionsRow, DivRowList, ContainerPActivo, DivTitle, DivDetails, SpanHtml, SpanCSS, SpanJAVASCRIPT, SpanWEBPACK, SpanREACTJS, SpanREDUX, SpanREACTHOOKS, SpanFIREBASE, SpanTESTING, PGeekyPuntos } from './styledListarCodelingoChallenges';
import { Button4 } from '../../globalStyles';
import { FormInput } from '../../uiComponents/Modal/ModalStyles';

const Row = (props) => {
  const { challenge, isDone, isPending, teacher, student } = props;
  const { id, geekyPuntos, description, title, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing } = challenge;
  const userDataLogged = useSelector((state) => state.auth);
  const { photoURL, uid, fullName } = userDataLogged;
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    linkDespliegue: '',
    linkGithub: '',
  });
  const handleDeleteChallenge = () => {
    dispatch(deleteFirestoreCodelingoChallenge(id));
  };
  const { linkDespliegue, linkGithub } = formValues;
  const handleEnviarReto = (evento) => {
    evento.preventDefault();
    if (!isDone) {
      if (linkDespliegue.length > 0) {
        if (linkGithub.length > 0) {
          dispatch(enviarChallengeCodelingoDone(uid, fullName, photoURL, id, linkDespliegue, linkGithub));
          reset();
        } else {
          alert('desbes agregar el link de github');
        }
      } else {
        alert('debes agregar el link de despliegue');
      }
    } else {
      alert('ya realizaste esta actividad, no puedes reenviarlo');
    }
  };
  return (
    <div>
      <details>
        <DivRowList>
          <DivTitle>
            <p>
              {title}
            </p>
          </DivTitle>
          <DivDetails>
            <div>
              {
                html && <SpanHtml>html</SpanHtml>
              }
              {
                css && <SpanCSS>Css</SpanCSS>
              }
              {
                javascript && <SpanJAVASCRIPT>Javascript</SpanJAVASCRIPT>
              }
              {
                webpack && <SpanWEBPACK>Webpack</SpanWEBPACK>
              }
              {
                reactJs && <SpanREACTJS>ReactJs</SpanREACTJS>
              }
              {
                reactHooks && <SpanREACTHOOKS>Hooks</SpanREACTHOOKS>
              }
              {
                redux && <SpanREDUX>redux</SpanREDUX>
              }
              {
                firebase && <SpanFIREBASE>firebase</SpanFIREBASE>
              }
              {
                testing && <SpanTESTING>testing</SpanTESTING>
              }
            </div>

            {isDone ? (<ContainerPActivo><p>Hecho</p></ContainerPActivo>) : (
              isPending ? <ContainerPInactivo><p>Pendiente</p></ContainerPInactivo> : (
                <PGeekyPuntos>
                  Geeky Puntos
                  {' '}
                  <span>
                    +
                    {geekyPuntos}
                  </span>

                </PGeekyPuntos>
              )
            )}
          </DivDetails>

        </DivRowList>
        <DivContent className='content'>
          <p>{description}</p>
          <DivButtonsActionsRow style={{ margin: '0' }}>
            <a href={challenge.link} target='_blank' rel='noreferrer'><Button4 style={{}} type='button'>Reto</Button4></a>
            {teacher && <Button4 primary type='button' onClick={() => handleDeleteChallenge()}>Eliminar</Button4>}
          </DivButtonsActionsRow>
          {isDone && <p>Completado</p>}
          {student && !isDone && !isPending && (
            <form>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormInput
                  style={{ width: '300px' }}
                  type='text'
                  placeholder='Enlace de despliegue'
                  name='linkDespliegue'
                  value={linkDespliegue}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                />
                <FormInput
                  style={{ width: '300px' }}
                  type='text'
                  placeholder='Enlace de GitHub'
                  name='linkGithub'
                  value={linkGithub}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                />
                <Button4 primary type='button' onClick={handleEnviarReto}>
                  Enviar mi reto
                </Button4>
              </div>
            </form>
          )}

        </DivContent>

      </details>
    </div>
  );
};

export default Row;
