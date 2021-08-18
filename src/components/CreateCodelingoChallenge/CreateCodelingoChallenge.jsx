import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { getFullName } from '../../reducers/authReducer';
import { addFirestoreNewCodelingoChallenge } from '../../actions/codelingoActions';
import InputRangeToAssignedGeekyPuntos from '../../uiComponents/InputRangeToAssignedGeekyPuntos/InputRangeToAssignedGeekyPuntos';
import { FormInput, FormModal, FormTextArea } from '../../uiComponents/Modal/ModalStyles';
import { ContainerCreateChallenge } from './CodelingoChallengeStyles';
import { Button4 } from '../../globalStyles';

const CreateCodelingoChallenge = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(getFullName);
  const [formValues, handleInputChange, reset] = useForm({
    link: '',
    title: '',
    geekyPuntos: 0,
    html: false,
    css: false,
    javascript: false,
    webpack: false,
    reactJs: false,
    reactHooks: false,
    redux: false,
    firebase: false,
    testing: false,
  });
  const { title, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing, geekyPuntos, description, link } = formValues;
  const htmlInput = useRef(null);
  const cssInput = useRef(null);
  const javascriptInput = useRef(null);
  const webpackInput = useRef(null);
  const reactJsInput = useRef(null);
  const reactHooksInput = useRef(null);
  const reduxInput = useRef(null);
  const firebaseInput = useRef(null);
  const testingInput = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (geekyPuntos < 1) {
      alert('Un reto codelingo no puede valer menos de 1 geekyPunto');
    } else if (geekyPuntos > 50) {
      alert('Un reto codelingo no puede valer máss de 50 geekyPuntos');
    } else {
      if (html === true || css === true || javascript === true || webpack === true || reactJs === true || reactHooks === true || redux === true || firebase === true || testing === true) {
        dispatch(addFirestoreNewCodelingoChallenge(formValues, fullName));
        console.log(formValues);
        reset();
        htmlInput.current.checked = false;
        cssInput.current.checked = false;
        webpackInput.current.checked = false;
        javascriptInput.current.checked = false;
        reactJsInput.current.checked = false;
        reactHooksInput.current.checked = false;
        reduxInput.current.checked = false;
        firebaseInput.current.checked = false;
        testingInput.current.checked = false;
      } else {
        alert('debes seleccionar al menos una categoria para el reto. html, css, javascript ...');
      }

    }
  };

  const handleInputRangeChangeFather = (name, value) => {
    const evento = {
      target: {
        name,
        value,
      },
    };
    handleInputChange(evento);
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#FF3B53' }}>
        Crear nuevo reto
        {' '}
        {fullName}
      </h2>
      <ContainerCreateChallenge>
        <FormModal onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '10px', fontWeight: '700' }}>
              Nombre de reto codelingo
              <FormInput
                type='text'
                placeholder='Nombre de reto codelingo'
                name='title'
                value={title}
                onChange={handleInputChange}
                autoComplete='off'
                required
              />
            </label>
            <label style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '10px', fontWeight: '700' }}>
              Descripción
              <FormTextArea name='description' cols='30' rows='10' value={description} placeholder='Descripción del reto' onChange={handleInputChange} required />
            </label>
            <label style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '10px', fontWeight: '700' }}>
              Reto
              <FormInput
                type='text'
                placeholder='Enlace del reto'
                name='link'
                value={link}
                onChange={handleInputChange}
                required
                autoComplete='off'
              />
            </label>
            <label style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '10px', fontWeight: '700' }}>
              Valor de geekyPuntos del reto
              <InputRangeToAssignedGeekyPuntos handleInputRangeChangeFather={handleInputRangeChangeFather} name='geekyPuntos' />
            </label>
            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Asignar tematicas de reto codelingo</h4>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', marginBottom: '15px' }}>
              <label >
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={htmlInput}
                  type='checkbox'
                  name='html'
                  value={html}
                  onChange={handleInputChange}
                />
                HTML
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={cssInput}
                  type='checkbox'
                  name='css'
                  value={css}
                  onChange={handleInputChange}
                />
                Css
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={javascriptInput}
                  type='checkbox'
                  name='javascript'
                  value={javascript}
                  onChange={handleInputChange}
                />
                JavaScript
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={webpackInput}
                  type='checkbox'
                  name='webpack'
                  value={webpack}
                  onChange={handleInputChange}
                />
                Webpack
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={reactJsInput}
                  type='checkbox'
                  name='reactJs'
                  value={reactJs}
                  onChange={handleInputChange}
                />
                React Js
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={reactHooksInput}
                  type='checkbox'
                  name='reactHooks'
                  value={reactHooks}
                  onChange={handleInputChange}
                />
                React Hooks
              </label>

              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={reduxInput}
                  type='checkbox'
                  name='redux'
                  value={redux}
                  onChange={handleInputChange}
                />
                Redux
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={firebaseInput}
                  type='checkbox'
                  name='firebase'
                  value={firebase}
                  onChange={handleInputChange}
                />
                Firebase
              </label>
              <label>
                <input
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  ref={testingInput}
                  type='checkbox'
                  name='testing'
                  value={testing}
                  onChange={handleInputChange}
                />
                Testing
              </label>
            </div>
            <Button4
              type='submit'
              className='btn m-1 btn-block btn-outline-primary'
            >
              Crear Codelingo challenge
            </Button4>
          </div>
        </FormModal >
      </ContainerCreateChallenge>
    </div >
  );
};

export default CreateCodelingoChallenge;
