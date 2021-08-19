/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/LabelLogin-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { firebase } from '../../firebase/firebaseConfig';
import { updateFirestoreStudent, updateFirestoreTeacher, updateFirestoreAdmin } from '../../actions/authActions';
import useForm from '../../hooks/useForm';
import NavbarTeacher from '../Structure/NavbarTeacher';
import NavbarAdmin from '../Structure/NavbarAdmin';
import NavbarStudent from '../Structure/NavbarStudent';
import { getRole } from '../../reducers/authReducer';
import { DivContainerLogin, ContainerLogin, TitleLogin, FormInput, LabelLogin, FormLogin, SubtitleLogin, Reset, LabelLoginPassword } from '../../styles/styledLogin';
import { Button4 } from '../../globalStyles';
import { useRef } from 'preact/hooks';

const EditProfileSocialGeek = (props) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const role = useSelector(getRole);
  const { history, match: { params: { corteId } } } = props;
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
      console.log(userDataLogged.roleGeek);
      switch (userDataLogged.roleGeek) {
        case 'student':
          dispatch(updateFirestoreStudent(userDataLogged.uid, formValues));
          reset();
          history.push(`/socialGeek/${corteId}/${userDataLogged.uid}`);
          break;
        case 'teacher':
          dispatch(updateFirestoreTeacher(userDataLogged.uid, formValues));
          reset();
          history.push(`/socialGeek/${corteId}/${userDataLogged.uid}`);
          break;
        case 'admin':
          dispatch(updateFirestoreAdmin(userDataLogged.uid, formValues));
          reset();
          history.push(`/socialGeek/${corteId}/${userDataLogged.uid}`);
          break;
        default:
          alert('no tienes roleGeek');
          break;
      }

      // eslint-disable-next-line react/jsx-indent

    } else {
      toast.error('Las contraseñas no coinciden');
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
    <>
      <div style={{ background: '#F2F2F2' }} >
        {role === 'teacher' && (
          <NavbarTeacher />
        )}
        {role === 'admin' && (
          <NavbarAdmin />
        )}
        {role === 'student' && (
          <NavbarStudent />
        )}
        <DivContainerLogin>
          <ContainerLogin style={{ width: '1200px', height: 'auto' }}>
            <TitleLogin>Modifica tus datos</TitleLogin>

            <FormLogin>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelLogin>
                  Nombre
                  <FormInput
                    type='text'
                    placeholder='Nombre'
                    name='fullName'
                    value={fullName}
                    onChange={handleInputChange}
                    required
                  />
                </LabelLogin>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelLogin>
                  Presentación
                  <textarea name='bio' cols='30' rows='10' value={bio} placeholder='Breve presentación' onChange={handleInputChange} />
                </LabelLogin>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <LabelLogin>
                  Facebook
                  <FormInput
                    type='text'
                    placeholder='Enlace de facebook'
                    name='facebook'
                    value={facebook}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
                <LabelLogin>
                  GitHub
                  <FormInput
                    type='text'
                    placeholder='Enlace de GitHub'
                    name='github'
                    value={github}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
                <LabelLogin>
                  Instagram
                  <FormInput
                    type='text'
                    placeholder='Enlace instagram'
                    name='instagram'
                    value={instagram}
                    onChange={handleInputChange}
                  />
                </LabelLogin>

              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <LabelLogin>
                  LinkedIn
                  <FormInput
                    type='text'
                    placeholder='Enlace LinkedIn'
                    name='linkedin'
                    value={linkedin}
                    onChange={handleInputChange}
                  />
                </LabelLogin>

                <LabelLogin>
                  Twitter
                  <FormInput
                    type='text'
                    placeholder='Enlace de Twitter'
                    name='twitter'
                    value={twitter}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
                <LabelLogin>
                  Sitio web
                  <FormInput
                    type='text'
                    placeholder='Enlace de Sitio Web'
                    name='linkedin'
                    value={linkedin}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <LabelLogin>
                  WhatsApp
                  <FormInput
                    type='number'
                    placeholder='Número de WhatsApp'
                    name='whatsapp'
                    value={whatsapp}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
                <LabelLogin>
                  Contraseña
                  <FormInput
                    type='text'
                    placeholder='Contraseña'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
                <LabelLogin>
                  Confirmar contraseña
                  <FormInput
                    type='text'
                    placeholder='Repetir contraseña'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleInputChange}
                  />
                </LabelLogin>
              </div>
              <LabelLogin>
                Foto de perfil
                <Button4 onClick={handleClick}>
                  Foto de perfil
                </Button4>
                <input style={{ display: 'none' }} type='file' name='photoUrl' ref={hiddenFileInput} onChange={handleUploadphotoURL} />
              </LabelLogin>
              <LabelLogin>
                {/* <Button4 onClick={handleClick}>
                  Foto de portada
                </Button4> */}
                <input style={{ display: 'none' }} type='file' name='photoUrl' onChange={handleUploadCover} />
              </LabelLogin>
              <Button4 type='submit' disabled={disabled} onClick={handleSubmit, handleClick}>Guardar</Button4>
            </FormLogin>
          </ContainerLogin>
        </DivContainerLogin>
      </div>
    </>
  );
};

export default EditProfileSocialGeek;
