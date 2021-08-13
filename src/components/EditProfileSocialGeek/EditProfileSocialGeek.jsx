import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { firebase } from '../../firebase/firebaseConfig';
import { updateFirestoreUser } from '../../actions/authActions';
import useForm from '../../hooks/useForm';

const EditProfileSocialGeek = (props) => {
  const dispatch = useDispatch();
  const userDataLogged = useSelector((state) => state.auth);
  const [disabled, setDisabled] = useState(false);
  const [formValues, handleInputChange, reset] = useForm({
    bio: userDataLogged.bio,
    cover: userDataLogged.cover,
    facebook: userDataLogged.facebook,
    fullName: userDataLogged.fullName,
    github: userDataLogged.github,
    instagram: userDataLogged.instagram,
    linkedin: userDataLogged.linkedin,
    password: userDataLogged.password,
    photoURL: userDataLogged.photoURL,
    skills: userDataLogged.skills,
    twitter: userDataLogged.twitter,
    website: userDataLogged.website,
    whatsapp: userDataLogged.whatsapp,
    confirmPassword: '',
  });
  const { cover,
    bio,
    facebook,
    fullName,
    github,
    instagram,
    linkedin,
    password,
    confirmPassword,
    skills,
    twitter,
    website,
    whatsapp } = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      dispatch(updateFirestoreUser(userDataLogged.uid, formValues));
      reset();
      props.history.push(`/socialGeek${userDataLogged.uid}`);
      // eslint-disable-next-line react/jsx-indent

    } else {
      alert('las contraseñas no coinciden');
    }

  };
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
                name: 'photoURL',
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
  const handleUploadCover = (event) => {
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
                name: 'cover',
              },
            };
            handleInputChange(evento);
            setDisabled(false);
            // sessionStorage.setItem('imgNewPost', url);
          })
          .catch((err) => {
            console.log(`Error obteniendo downloadURL = > ${err}`);
            setDisabled(false);
          });
      },
    );
  };
  return (
    <div>
      <form>
        <label>
          nombre:
          <input
            type='text'
            placeholder='nombre'
            name='fullName'
            value={fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Presentacion
          <textarea name='bio' cols='30' rows='10' value={bio} placeholder='breve presentacion' onChange={handleInputChange} />
        </label>
        <label>
          Link de facebook:
          <input
            type='text'
            placeholder='link de facebook'
            name='facebook'
            value={facebook}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Link de github:
          <input
            type='text'
            placeholder='link de github'
            name='github'
            value={github}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Link de instagram:
          <input
            type='text'
            placeholder='link de instagram'
            name='instagram'
            value={instagram}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Link de linkedin:
          <input
            type='text'
            placeholder='link de linkedin'
            name='linkedin'
            value={linkedin}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Link de twitter:
          <input
            type='text'
            placeholder='link de twitter'
            name='twitter'
            value={twitter}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Link de website:
          <input
            type='text'
            placeholder='link de linkedin'
            name='linkedin'
            value={linkedin}
            onChange={handleInputChange}
          />
        </label>
        <label>
          numero de whatsapp:
          <input
            type='number'
            placeholder='numero de whatsapp'
            name='whatsapp'
            value={whatsapp}
            onChange={handleInputChange}
          />
        </label>
        <label>
          password:
          <input
            type='text'
            placeholder='link de password'
            name='password'
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          confirmar password:
          <input
            type='text'
            placeholder='confirmar password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Cambio de Foto de perfil
          <input type='file' name='photoUrl' onChange={handleUploadphotoURL} />
        </label>
        <label>
          Cambio de Foto de portada
          <input type='file' name='photoUrl' onChange={handleUploadCover} />
        </label>
        <button type='submit' disabled={disabled} onClick={handleSubmit}>Editar mi perfil</button>
      </form>
    </div>
  );
};

export default EditProfileSocialGeek;
