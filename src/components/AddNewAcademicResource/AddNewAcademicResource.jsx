/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadedURL } from '../../reducers/bancoRecursosReducer';
import { getPhotoURL, getFullName, getUserId, getRole } from '../../reducers/authReducer';
import useForm from '../../hooks/useForm';
import { addFirestoreNewAcademicResource, uploadImgResource } from '../../actions/bancoRecursosActions';

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
      <h3>Añadir nuevos recursos</h3>
      <form>
        <select value={category} placeholder='categorias' name='category' onChange={handleInputChange} required>
          <option value=''> Seleccione categoria</option>
          {categories.length > 0 && categories.map((itemCategory, index) => <option key={index} value={itemCategory}>{itemCategory}</option>)}
        </select>
        <input
          type='text'
          placeholder='titulo de la recomendacion'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='inserte el link'
          name='link'
          value={link}
          onChange={handleInputChange}
          required
        />
        <select value={format} placeholder='formato de recurso' name='format' onChange={handleInputChange} required>
          <option value=''> Seleccione categoria</option>
          <option value='video'>video</option>
          <option value='articulo'>articulo</option>
          <option value='documentacion'>documentacion</option>
          <option value='publicacion'>publicacion</option>
          <option value='blog'>blog</option>
          <option value='pagina web'>pagina web</option>
          <option value='aplicacion'>aplicacion</option>
        </select>
        <select value={level} placeholder='nivel del recurso' name='level' onChange={handleInputChange} required>
          <option value=''> Seleccione nivel de dificultad de recurso</option>
          <option value='principiante'>principiante</option>
          <option value='intermedio'>intermedio</option>
          <option value='avanzado'>avanzado</option>
        </select>
        <select value={english} placeholder='¿ingles?' name='english' onChange={handleInputChange} required>
          <option value='false'>No ingles</option>
          <option value='true'>En ingles</option>
        </select>
        <textarea
          placeholder='descripcion del recurso'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <input list='subCategories' placeholder='palabra clave' name='subCategory' required value={subCategory} onChange={handleInputChange} required />
        <datalist id='subCategories'>
          {subCategories.length > 0 && subCategories.map((itemCategory, index) => <option key={index} value={itemCategory}>{itemCategory}</option>)}
        </datalist>
        <div>
          <p>
            Sube un archivo:
            <input type='file' name='archivosubido' onChange={handleUploadImage} required />
          </p>
        </div>
        <button type='submit' onClick={handleSubmit} disabled={loaded}>Agregar recurso Academico</button>
      </form>
    </div>
  );
};

export default AddNewAcademicResource;
