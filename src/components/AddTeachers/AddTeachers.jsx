import React from 'react';
import { useDispatch } from 'react-redux';
import { registerNewTeacher } from '../../actions/authActions';
import { Button4 } from '../../globalStyles';
import useForm from '../../hooks/useForm';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';

const AddTeachers = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });
  const { email, fullName, password, confirmPassword } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      console.log(formValues);
      dispatch(registerNewTeacher(email, password, fullName));
      reset();
    }

  };
  return (
    <>
      <h2>Agregar un nuevo Profesor</h2>
      <p>Digite correctamente los campos</p>
      <FormModal onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Nombre completo'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='text'
          placeholder='Contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='text'
          placeholder='Confirmación de contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <Button4 type='submit'>Añadir nuevo Profesor</Button4>
      </FormModal>

    </>
  );
};

export default AddTeachers;
