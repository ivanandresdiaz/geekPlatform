import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { firebase } from '../../firebase/firebaseConfig';
import { addFirestoreNewsSocialGeek } from '../../actions/socialGeekActions';

const CreateNewsSocialGeek = (props) => {
  const dispatch = useDispatch();
  const { corteId } = props;
  const [disabled, setDisabled] = useState(true);
  const [values, handleInputChange, reset] = useForm({
    categoryNews: 'blogs',
    description: '',
  });
  const { description } = values;
  const handleUploadImageSocialGeek = (event) => {
    const file = event.target.files[0];
    const refStorage = firebase.storage().ref(`socialGeekNews/${file.name}`);
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
            const evento = {
              target: {
                value: url,
                name: 'photoURLNews',
              },
            };
            handleInputChange(evento);
            setDisabled(false);
            // sessionStorage.setItem('imgNewPost', url);
          })
          .catch((err) => {
            console.log(`Error obteniendo downloadURL = > ${err}`);
          });
      },
    );
  };

  const handleChooseCategory = (category) => {
    const evento = {
      target: {
        value: category,
        name: 'categoryNews',
      },
    };
    handleInputChange(evento);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFirestoreNewsSocialGeek(corteId, values));
    reset();
  };
  return (
    <div>
      <h3>Añadir nuevos recursos</h3>
      <div>
        <button type='button' onClick={() => handleChooseCategory('blogs')}>Blogs</button>
        <button type='button' onClick={() => handleChooseCategory('memes')}>Memes</button>
        <button type='button' onClick={() => handleChooseCategory('resources')}>Recursos interesantes</button>
      </div>
      <form>
        <textarea
          placeholder='descripcion'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <p>sube una imagen relacionada con la publicacion</p>
        <input type='file' name='archivosubido' onChange={handleUploadImageSocialGeek} required />
        <button type='submit' onClick={handleSubmit} disabled={disabled}>Agregar recurso Academico</button>
      </form>
    </div>
  );
};

export default CreateNewsSocialGeek;
