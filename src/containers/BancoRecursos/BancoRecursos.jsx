/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreCategoryData } from '../../actions/bancoRecursosActions';
import { getCategories, getSubCategories, getCategoryData } from '../../reducers/bancoRecursosReducer';
import { getFullName, getUserId } from '../../reducers/authReducer';
import CardRecursoAcademico from '../../uiComponents/CardRecursoAcademico/CardRecursoAcademico';
import { DivContainerRecursos } from './styledBancoRecursos';
import AddNewAcademicResource from '../../components/AddNewAcademicResource/AddNewAcademicResource';
import CreateNewCategory from '../../components/CreateNewCategory/CreateNewCategory';
import ListarRecursosAcademicos from '../../uiComponents/ListarRecursosAcademicos/ListarRecursosAcademicos';

const BancoRecursos = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategoryData);
  const categories = useSelector(getCategories);
  const subCategories = useSelector(getSubCategories);
  const userId = useSelector(getUserId);
  const loggedUser = useSelector(getFullName);
  useEffect(() => {
    dispatch(getFirestoreCategoryData('Frontend'));
  }, []);
  const handleGetCategory = (category) => {
    console.log(category);
    dispatch(getFirestoreCategoryData(category));
  };
  console.log('categories', categories);
  return (
    <>
      <h1>Banco de Recursos academicos</h1>
      <h3>Categorias</h3>
      <div>
        {categories.length > 0 && categories.map((category) => (<button key={category} type='button' onClick={() => handleGetCategory(category)}>{category}</button>
        ))}
      </div>
      <CreateNewCategory categories={categories} />
      <div>
        <AddNewAcademicResource loggedUser={loggedUser} categories={categories} userId={userId} subCategories={subCategories} />
      </div>
      {categoryData.length > 0 ? (
        <ListarRecursosAcademicos categoryData={categoryData} />
      ) :
        <p>No hay recursos Disponibles en este momento</p>}
    </>
  );
};

export default BancoRecursos;
