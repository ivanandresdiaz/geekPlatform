import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { getFullName } from '../../reducers/authReducer';
import { addFirestoreNewCodelingoChallenge } from '../../actions/codelingoActions';
import InputRangeToAssignedGeekyPuntos from '../../uiComponents/InputRangeToAssignedGeekyPuntos/InputRangeToAssignedGeekyPuntos';

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
      alert('un reto codelingo no puede valer menos de 1 geekyPunto');
    } else if (geekyPuntos > 50) {
      alert('un reto codelingo no puede valer meas de 50 geekyPuntos');
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
      <h1>
        Teacher :
        {' '}
        {fullName}
      </h1>
      <form onSubmit={handleSubmit}>

        <label>
          Nombre de reto codelingo
          <input
            type='text'
            placeholder='nombre de reto codelingo'
            name='title'
            value={title}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
        </label>
        <label>
          Descripción
          <textarea name='description' cols='30' rows='10' value={description} placeholder='Descripción del reto' onChange={handleInputChange} required />
        </label>
        <label>
          Link de reto
          <input
            type='text'
            placeholder='link del reto'
            name='link'
            value={link}
            onChange={handleInputChange}
            required
            autoComplete='off'
          />
        </label>
        <label>
          Valor de geekyPuntos del reto
          <InputRangeToAssignedGeekyPuntos handleInputRangeChangeFather={handleInputRangeChangeFather} name='geekyPuntos' />
        </label>
        <h4>Asignar tematicas de reto codelingo</h4>
        <label>
          <input
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
            ref={javascriptInput}
            type='checkbox'
            name='javascript'
            value={javascript}
            onChange={handleInputChange}
          />
          Javascript
        </label>
        <label>
          <input
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
            ref={testingInput}
            type='checkbox'
            name='testing'
            value={testing}
            onChange={handleInputChange}
          />
          Testing
        </label>
        <button
          type='submit'
          className='btn m-1 btn-block btn-outline-primary'
        >
          Crear Codelingo challenge
        </button>
      </form>
    </div>
  );
};

export default CreateCodelingoChallenge;
