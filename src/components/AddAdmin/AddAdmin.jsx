import React from 'react';
import { useDispatch } from 'react-redux';
import { registerNewAdmin } from '../../actions/authActions';
import { Button4 } from '../../globalStyles';
import useForm from '../../hooks/useForm';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';

const AddAdmin = () => {
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
      dispatch(registerNewAdmin(email, password, fullName));
      reset();
    }

  };
  return (
    <>
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
          type='password'
          placeholder='Contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='password'
          placeholder='Confirmación de contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <Button4 type='submit'>Añadir nuevo Administrador</Button4>
      </FormModal>

    </>
  );
};

export default AddAdmin;
