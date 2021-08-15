/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreCategoryData } from '../../actions/bancoRecursosActions';
import { getCategories, getSubCategories, getCategoryData } from '../../reducers/bancoRecursosReducer';
import { getFullName, getRole, getUserId } from '../../reducers/authReducer';
import CardRecursoAcademico from '../../uiComponents/CardRecursoAcademico/CardRecursoAcademico';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import { ContainerTitleRecursos, DivContainerRecursos } from './styledBancoRecursos';
import AddNewAcademicResource from '../../components/AddNewAcademicResource/AddNewAcademicResource';
import CreateNewCategory from '../../components/CreateNewCategory/CreateNewCategory';
import ListarRecursosAcademicos from '../../uiComponents/ListarRecursosAcademicos/ListarRecursosAcademicos';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import NavbarStudent from '../../components/Structure/NavbarStudent';
import Footer from '../../components/Structure/Footer';
import './estilosBanco.css'
import { Button7 } from '../../globalStyles';

const BancoRecursos = () => {
  const role = useSelector(getRole);
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
    dispatch(getFirestoreCategoryData(category));
  };
  return (
    <>
      <div style={{ backgroundColor: '#F2F2F2' }}>
        {role === 'teacher' && (
          <NavbarTeacher />
        )}
        {role === 'admin' && (
          <NavbarAdmin />
        )}
        {role === 'student' && (
          <NavbarStudent />
        )}
        <ContainerTitleRecursos>
          <h1>Banco de Recursos academicos</h1>
        </ContainerTitleRecursos>
        <form action="" className="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
        <CreateNewCategory categories={categories} />
        <div>
          <AddNewAcademicResource loggedUser={loggedUser} categories={categories} userId={userId} subCategories={subCategories} />
        </div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          {categories.length > 0 && categories.map((category) => (<Button7 key={category} type='button' onClick={() => handleGetCategory(category)}>{category}</Button7>
          ))}
        </div>

        {categoryData.length > 0 ? (
          <ListarRecursosAcademicos categoryData={categoryData} />
        ) :
          <p>No hay recursos Disponibles en este momento</p>}
        <Footer />
      </div>

    </>
  );
};

export default BancoRecursos;
