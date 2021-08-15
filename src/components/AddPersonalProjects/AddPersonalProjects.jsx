import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { firebase } from '../../firebase/firebaseConfig';
import { addFirestorePersonalProject } from '../../actions/socialGeekActions';

const AddPersonalProjects = (props) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [formValues, handleInputChange, reset] = useForm({
    projectTitle: '',
    linkDespliegue: '',
    linkGithub: '',
    coverProject: '',
  });
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(addFirestorePersonalProject(formValues));
    reset();
  };
  const handleUploadImgProject = (event) => {
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
                name: 'coverProject',
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

  const { projectTitle, linkDespliegue, linkGithub } = formValues;
  return (
    <div>
      <h1>Adicionar nuevo proyecto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nombre del Proyecto'
          name='projectTitle'
          value={projectTitle}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='Link de despliegue'
          name='linkDespliegue'
          value={linkDespliegue}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='repositorio de github'
          name='linkGithub'
          value={linkGithub}
          onChange={handleInputChange}
          required
        />
        <input type='file' name='archivosubido' onChange={handleUploadImgProject} required />
        <button type='submit' disabled={disabled} onClick={handleSubmit}>Añadir nuevo Proyecto</button>
      </form>
    </div>
  );
};

export default AddPersonalProjects;
