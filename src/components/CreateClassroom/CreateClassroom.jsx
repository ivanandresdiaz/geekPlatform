import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { createClassroom } from '../../actions/adminActions';

const CreateClassroom = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    nombreSalon: '',
  });
  const { nombreSalon } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(createClassroom(nombreSalon, corteId));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre de salon'
          name='nombreSalon'
          value={nombreSalon}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Crear nuevo salon</button>
      </form>
    </div>
  );
};

export default CreateClassroom;
