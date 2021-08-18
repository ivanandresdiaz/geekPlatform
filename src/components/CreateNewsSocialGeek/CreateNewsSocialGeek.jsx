import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconName, MdPermMedia } from 'react-icons/md';
import useForm from '../../hooks/useForm';
import { firebase } from '../../firebase/firebaseConfig';
import { addFirestoreNewsSocialGeek } from '../../actions/socialGeekActions';
import { ContainerNewPub, ShareBottom, ShareHr, ShareIcon, ShareInput, ShareOption, ShareOptions, ShareTop } from './CreateNewsStyles';
import { Button4, Button7 } from '../../globalStyles';

const CreateNewsSocialGeek = (props) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const userDataLogged = useSelector((state) => state.auth);
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFirestoreNewsSocialGeek(corteId, values));
    reset();
  };
  return (
    <>
      <ContainerNewPub>
        <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '12px' }}>
          <form>
            <div styel={{ display: 'flex', flexDirection: 'row' }}>
              <h3>Escribe una publicación</h3>
              <select placeholder='' name='cantidad' onChange={handleInputChange} required>
                <option value=''> Seleccione tipo de publicacion</option>
                <option value='resources'>resources</option>
                <option value='memes'>memes</option>
              </select>
            </div>
            <ShareTop>
              {/* imagen de perfil del que publica */}
              <img src={userDataLogged.photoURL} alt={userDataLogged.fullName} />
              <textarea
                style={{ resize: 'none', border: 'none', boxShadow: 'none', outline: 'none', fontSize: '16px', width: '500px' }}
                placeholder='¿Qué piensas Geek?'
                name='description'
                value={description}
                onChange={handleInputChange}
                required
              />
            </ShareTop>
            <ShareHr />
            <ShareBottom>
              <ShareOptions>
                <ShareOption>
                  <Button4 primary onClick={handleClick}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <MdPermMedia />
                      <p style={{ paddingLeft: '5px' }}>Imagen</p>
                    </div>
                  </Button4>
                  <input
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    type='file'
                    name='archivosubido'
                    onChange={handleUploadImageSocialGeek}
                    required
                  />
                </ShareOption>
                <ShareOption>
                  <Button4 type='submit' onClick={handleSubmit} disabled={disabled}>Publicar</Button4>
                  {/*  */}
                </ShareOption>
              </ShareOptions>
            </ShareBottom>
          </form>
        </div>
      </ContainerNewPub>

    </>
  );
};

export default CreateNewsSocialGeek;

