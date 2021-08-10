/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { getFullName, getUserId } from '../../reducers/authReducer';
import { singOutAuth } from '../../actions/authActions';
import { getActionBancoRecursos } from '../../actions/bancoRecursosActions';
import { getBancoRecursos } from '../../reducers/bancoRecursosReducer';
import CardRecursoAcademico from '../../uiComponents/CardRecursoAcademico/CardRecursoAcademico';
import { DivContainerRecursos } from './styledBancoRecursos';
import AddNewAcademicResource from '../../components/AddNewAcademicResource/AddNewAcademicResource';
import CreateNewCategory from '../../components/CreateNewCategory/CreateNewCategory';

const BancoRecursos = () => {
  const bancoRecursos = useSelector(getBancoRecursos);
  const userId = useSelector(getUserId);
  const loggedUser = useSelector(getFullName);
  const categories = ['Frontend', 'Backend', 'Nuevas Tecnologias', 'Javascript', 'Node', 'React'];
  return (
    <>
      <h1>Banco de Recursos academicos</h1>
      <h3>
        Crear nueva Categoria
      </h3>
      <CreateNewCategory categories={categories} />
      <div>
        <AddNewAcademicResource loggedUser={loggedUser} categories={categories} userId={userId} />
      </div>
      <DivContainerRecursos>
        {bancoRecursos.length > 0 ? (
          <>
            {bancoRecursos.map((recurso) => <CardRecursoAcademico key={recurso.id} {...recurso} />)}
          </>
        ) :
          <p>No hay recursos Disponibles en este momento</p>}
      </DivContainerRecursos>
    </>
  );
};

export default BancoRecursos;
