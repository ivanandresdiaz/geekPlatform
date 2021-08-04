import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewCorte } from '../../actions/adminActions';
import useForm from '../../hooks/useForm';

const CreateCorte = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(
    {
      corteName: '',
    },
  );
  const { corteName } = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewCorte(corteName));
    reset();
  };
  return (
    <div>
      <h1>Crear Corte Unica</h1>
      <p>No puede repetirse el nombre de las cortes</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre de Corte unica'
          name='corteName'
          value={corteName}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Crear Nueva corte</button>
      </form>

    </div>
  );
};

export default CreateCorte;
