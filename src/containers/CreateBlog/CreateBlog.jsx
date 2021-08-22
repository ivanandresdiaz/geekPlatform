import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { firebase as firebaseFirestorage } from '../../firebase/firebaseConfig';
import { createFirestoreNewBlog } from '../../actions/socialGeekActions';
import useForm from '../../hooks/useForm';

const CreateBlog = (props) => {
  const [disabled, setDisabled] = useState(false);
  const { match: { params: { corteId, profileUid } }, history } = props;
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description: '',
    sitioWeb: '',
    gitHub: '',
    video: '',
    image: '',
    textTop: '',
    textBottom: '',
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

  const { title, description, sitioWeb, gitHub, video, image, textTop, textBottom, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing } = formValues;
  const htmlInput = useRef(null);
  const cssInput = useRef(null);
  const javascriptInput = useRef(null);
  const webpackInput = useRef(null);
  const reactJsInput = useRef(null);
  const reactHooksInput = useRef(null);
  const reduxInput = useRef(null);
  const firebaseInput = useRef(null);
  const testingInput = useRef(null);
  const handleUploadphotoURL = (event) => {
    setDisabled(true);
    const file = event.target.files[0];
    const refStorage = firebaseFirestorage.storage().ref(`socialGeek/${file.name}`);
    const task = refStorage.put(file);
    task.on(
      'state_changed',
      (snapshot) => {
        const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(`Error subiendo archivo = > ${err.message}`);
      },
      () => {
        task.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log('url', url);
            const evento = {
              target: {
                value: url,
                name: 'image',
              },
            };
            handleInputChange(evento);
            setDisabled(false);
            // sessionStorage.setItem('imgNewPost', url);
          })
          .catch((err) => {
            setDisabled(false);
            console.log(`Error obteniendo downloadURL = > ${err}`);
          });
      },
    );

  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(createFirestoreNewBlog(title, description, sitioWeb, gitHub, video, image, textTop, textBottom, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing, corteId, profileUid));
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
    history.push(`/socialGeek/${corteId}`);
  };

  return (
    <div>
      <h1>Crear Nuevo Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Titulo del Blog'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='breve Descripcion'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='image'>subir una imagen</label>
        <input type='file' name='image' id='image' accept='image/*' onChange={handleUploadphotoURL} />

        <textarea name='textTop' id='textTop' cols='30' rows='10' value={textTop} onChange={handleInputChange}>Texto superior</textarea>
        <textarea name='textBottom' id='textBottom' cols='30' rows='10' value={textBottom} onChange={handleInputChange}>Texto inferior</textarea>

        <input
          type='text'
          placeholder='link del sitio web'
          name='sitioWeb'
          value={sitioWeb}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link del GitHub'
          name='gitHub'
          value={gitHub}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='URL de video'
          name='video'
          value={video}
          onChange={handleInputChange}
        />
        <label>
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
        <button type='submit' disabled={disabled}>Publicar Blog</button>
        {/* //no toccar disabled */}
      </form>
    </div>
  );
};

export default CreateBlog;
