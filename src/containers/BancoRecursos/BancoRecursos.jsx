/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { getFullName } from '../../reducers/authReducer';
import { singOutAuth } from '../../actions/authActions';
import { getActionBancoRecursos, addRecursoAction } from '../../actions/bancoRecursosActions';
import { getBancoRecursos } from '../../reducers/bancoRecursosReducer';
import CardRecursoAcademico from '../../uiComponents/CardRecursoAcademico/CardRecursoAcademico';
import { DivContainerRecursos } from './styledBancoRecursos';

const BancoRecursos = () => {
  const dispatch = useDispatch();
  const bancoRecursos = useSelector(getBancoRecursos);
  const name = useSelector(getFullName);
  const [values, handleInputChange, reset] = useForm({
    category: '',
    description: '',
    url: '',
  });
  const { category, description, url } = values;
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };
  useEffect(() => {
    dispatch(getActionBancoRecursos());
  }, []);
  const handleSubmit = (evento) => {
    console.log('se envian estos values', values);
    evento.preventDefault();
    dispatch(addRecursoAction(category, description, url));
    reset();
  };
  return (
    <>
      <h1>Banco de Recursos academicos</h1>
      <p>
        Bienvenido
        {' '}
        {name}
      </p>

      <button type='button' onClick={handleCerrarSesion}>
        Cerrar  sesion
      </button>

      <form>
        <input
          type='text'
          placeholder='Categoria'
          name='category'
          value={category}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='url'
          name='url'
          value={url}
          onChange={handleInputChange}
        />

        <textarea
          placeholder='Descripcion del Recurso'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <button type='submit' onClick={handleSubmit}>Agregar recurso academico</button>
      </form>
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
