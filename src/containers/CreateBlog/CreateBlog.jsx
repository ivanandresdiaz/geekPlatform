import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../../firebase/firebaseConfig';
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
  });

  const { title, description, sitioWeb, gitHub, video, image, textTop, textBottom } = formValues;
  const handleUploadphotoURL = (event) => {
    setDisabled(true);
    const file = event.target.files[0];
    const refStorage = firebase.storage().ref(`socialGeek/${file.name}`);
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
    dispatch(createFirestoreNewBlog(title, description, sitioWeb, gitHub, video, image, textTop, textBottom, corteId, profileUid));
    reset();
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
        <button type='submit' disabled={disabled}>Publicar Blog</button>
        {/* //no toccar disabled */}
      </form>
    </div>
  );
};

export default CreateBlog;
