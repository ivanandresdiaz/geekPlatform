import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewCorte } from '../../actions/adminActions';
import { Button4 } from '../../globalStyles';
import useForm from '../../hooks/useForm';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';

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
      <h2>Crear Corte Unica</h2>
      <p>No puede repetirse el nombre de las cortes</p>
      <FormModal onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Nombre de Corte unica'
          name='corteName'
          value={corteName}
          onChange={handleInputChange}
          required
        />
        <Button4 type='submit'>Crear</Button4>
      </FormModal>

    </div>
  );
};

export default CreateCorte;
