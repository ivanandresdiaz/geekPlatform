/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadedURL } from '../../reducers/bancoRecursosReducer';
import { getPhotoURL, getFullName, getUserId, getRole } from '../../reducers/authReducer';
import useForm from '../../hooks/useForm';
import { addFirestoreNewAcademicResource, uploadImgResource } from '../../actions/bancoRecursosActions';
import { FormInput, FormModal, FormTextArea } from '../../uiComponents/Modal/ModalStyles';
import { SelectCat } from './NewAcademicResourceStyles';
import { Button5 } from '../../globalStyles';

const AddNewAcademicResource = (props) => {
  const { loggedUser, userId, categories, subCategories } = props;
  const [loaded, setLoaded] = useState(true);
  const cover = useSelector(getLoadedURL);
  const recommendedByPhotoURL = useSelector(getPhotoURL);
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    recommendedByPhotoURL,
    cover,
    category: '',
    subCategory: '',
    title: '',
    link: '',
    format: '',
    level: '',
    english: false,
    description: '',
    recommendedBy: loggedUser,
    userId,
    createdAt: '',
    score: [],
    aceppted: true,
    active: true,
  });
  const { category, subCategory, title, link, format, level, english, description, recommendedBy, createdAt, score, active, aceppted } = values;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFirestoreNewAcademicResource(values, subCategories));
    reset();
  };
  const handleUploadImage = (event) => {
    dispatch(uploadImgResource(event.target.files[0]));
  };
  useEffect(() => {
    if (cover.length > 0) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [cover]);

  return (
    <div>
      <FormModal>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <FormInput
              type='text'
              placeholder='TÍtulo de la recomendacion'
              name='title'
              value={title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <FormTextArea style={{ width: '520px', height: '110px' }}
              placeholder='Descripción del recurso'
              name='description'
              value={description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
            <SelectCat style={{ marginRight: '15px' }} value={category} placeholder='categorias' name='category' onChange={handleInputChange} required>
              <option value=''>Selecciona categoria</option>
              {categories.length > 0 && categories.map((itemCategory, index) => <option key={index} value={itemCategory}>{itemCategory}</option>)}
            </SelectCat>
            <SelectCat style={{ marginRight: '15px' }} value={format} placeholder='formato de recurso' name='format' onChange={handleInputChange} required>
              <option value=''> Seleccione artículo</option>
              <option value='video'>Video</option>
              <option value='articulo'>ArtÍculo</option>
              <option value='documentacion'>Documentación</option>
              <option value='publicacion'>Publicación</option>
              <option value='blog'>Blog</option>
              <option value='pagina web'>Página web</option>
              <option value='aplicacion'>Aplicación</option>
            </SelectCat>
            <SelectCat style={{ marginRight: '15px' }} value={level} placeholder='nivel del recurso' name='level' onChange={handleInputChange} required>
              <option value=''>Seleccione nivel de dificultad de recurso</option>
              <option value='principiante'>Principiante</option>
              <option value='intermedio'>Intermedio</option>
              <option value='avanzado'>Avanzado</option>
            </SelectCat>
            <SelectCat style={{ marginRight: '15px' }} value={english} placeholder='¿ingles?' name='english' onChange={handleInputChange} required>
              <option value='false'>No inglés</option>
              <option value='true'>En inglés</option>
            </SelectCat>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
            <FormInput
              style={{ marginRight: '15px' }}
              type='text'
              placeholder='Inserte el link'
              name='link'
              value={link}
              onChange={handleInputChange}
              required
            />
            <FormInput style={{ marginRight: '15px' }} list='subCategories' placeholder='Palabra clave' name='subCategory' value={subCategory} onChange={handleInputChange} required />
            <datalist id='subCategories'>
              {subCategories.length > 0 && subCategories.map((itemCategory, index) => <option key={index} value={itemCategory}>{itemCategory}</option>)}
            </datalist>
            <FormInput style={{ marginRight: '15px' }} type='file' name='archivosubido' onChange={handleUploadImage} required />
          </div>
          <Button5 type='submit' onClick={handleSubmit} disabled={loaded}>Agregar recurso Academico</Button5>
        </div>
      </FormModal >
    </div >
  );
};

export default AddNewAcademicResource;
