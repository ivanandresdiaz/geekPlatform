/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { createNewSprint, uploadSprintPDF } from '../../actions/classroomActions';
import { getLoadedSprintPDF } from '../../reducers/salonReducer';

const CreateSprints = (props) => {
  const { corteId, salonId } = props;
  const loadedSprintPDF = useSelector(getLoadedSprintPDF);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(loadedSprintPDF);
    if (loadedSprintPDF.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [loadedSprintPDF]);
  const htmlInput = useRef(null);
  const cssInput = useRef(null);
  const webpackInput = useRef(null);
  const reactJsInput = useRef(null);
  const reactHooksInput = useRef(null);
  const reduxInput = useRef(null);
  const firebaseInput = useRef(null);
  const testingInput = useRef(null);
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description: '',
    salonId: '',
    startDate: '',
    deadline: '',
    deliveryLink: '',
    html: false,
    css: false,
    webpack: false,
    reactJs: false,
    reactHooks: false,
    redux: false,
    firebase: false,
    testing: false,
    supportLink1: '',
    supportLink2: '',
    supportLink3: '',
    supportLink4: '',
    imgSprint: '',
  });
  const {
    title,
    description,
    startDate,
    deadline,
    deliveryLink,
    supportLink1,
    supportLink2,
    supportLink3,
    supportLink4,
    html,
    css,
    webpack,
    reactJs,
    reactHooks,
    redux,
    firebase,
    testing } = formValues;
  const handleUploadImgSprint = (event) => {
    const file = event.target.files[0];
    const refStorage = firebase.storage().ref(`socialGeek/personalProjects/${file.name}`);
    const task = refStorage.put(file);
    task.on(
      'state_changed',
      (snapshot) => {
        const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        alert(`Error subiendo archivo = > ${err.message}`);
      },
      () => {
        task.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            const evento = {
              target: {
                value: url,
                name: 'imgSprint',
              },
            };
            handleInputChange(evento);
            setDisabled(false);
            // sessionStorage.setItem('imgNewPost', url);
          })
          .catch((err) => {
            alerts(`Error obteniendo downloadURL = > ${err}`);
          });
      },
    );
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(createNewSprint(corteId, salonId, title,
      description,
      startDate,
      deadline,
      deliveryLink,
      supportLink1,
      supportLink2,
      supportLink3,
      supportLink4,
      html,
      css,
      webpack,
      reactJs,
      reactHooks,
      redux,
      firebase,
      testing));
    reset();
    htmlInput.current.checked = false;
    cssInput.current.checked = false;
    webpackInput.current.checked = false;
    reactJsInput.current.checked = false;
    reactHooksInput.current.checked = false;
    reduxInput.current.checked = false;
    firebaseInput.current.checked = false;
    testingInput.current.checked = false;
  };

  const handleUploadSprintPDF = (event) => {
    dispatch(uploadSprintPDF(event.target.files[0]));
  };
  return (
    <div>
      <h1>Crear Nuevo Sprint</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='titulo del Sprint'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <textarea name='description' cols='30' rows='10' value={description} placeholder='descripcion del sprint' onChange={handleInputChange} />
        <input
          type='date'
          name='startDate'
          value={startDate}
          onChange={handleInputChange}
          required
        />
        <input
          type='date'
          name='deadline'
          value={deadline}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='link de entrega'
          name='deliveryLink'
          value={deliveryLink}
          onChange={handleInputChange}
          required
        />
        <label>
          <input
            ref={htmlInput}
            type='checkbox'
            name='html'
            value={html}
            onChange={handleInputChange}
          />
          Html
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
          Reack Hooks
        </label>

        <label>
          <input
            ref={reduxInput}
            type='checkbox'
            name='redux'
            value={redux}
            onChange={handleInputChange}
          />
          Reack Hooks
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

        <input
          type='text'
          placeholder='link de apoyo 1'
          name='supportLink1'
          value={supportLink1}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 2'
          name='supportLink2'
          value={supportLink2}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 3'
          name='supportLink3'
          value={supportLink3}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 4'
          name='supportLink4'
          value={supportLink4}
          onChange={handleInputChange}
        />
        <label>
          Subir PDF
          <input type='file' name='archivosubido' onChange={handleUploadSprintPDF} required />
        </label>
        <label>
          Subir imagen
          <input type='file' name='imgSprint' onChange={handleUploadImgSprint} required />
        </label>
        <button type='submit' disabled={disabled}>Añadir Nuevo Sprint</button>
      </form>
    </div>
  );
};

export default CreateSprints;
