/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreSubcategories, addFirestoreNewAcademicResource } from '../../actions/bancoRecursosActions';
import { getSubCategories } from '../../reducers/bancoRecursosReducer';

const AddNewAcademicResource = (props) => {
  const { loggedUser, userId, categories } = props;
  const dispatch = useDispatch();
  const subCategories = useSelector(getSubCategories);
  const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const reset = (newStateForm = initialState) => {
      setValues(newStateForm);
    };
    const handleInputChange = ({ target }) => {
      if (target.name === 'category') {
        dispatch(getFirestoreSubcategories(target.value));
      }
      setValues({
        ...values,
        [target.name]: target.value,
      });
    };

    return [values, handleInputChange, reset];
  };
  const [values, handleInputChange, reset] = useForm({
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
    dispatch(addFirestoreNewAcademicResource(values));
    reset();
  };
  return (
    <div>
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
        <input list='subCategories' placeholder='subCategorias' name='subCategory' required value={subCategory} onChange={handleInputChange} />
        <datalist id='subCategories'>
          {subCategories.length > 0 && subCategories.map((itemCategory, index) => <option key={index} value={itemCategory}>{itemCategory}</option>)}
        </datalist>

        <button type='submit' onClick={handleSubmit}>Agregar recurso Academico</button>
      </form>
    </div>
  );
};

export default AddNewAcademicResource;
