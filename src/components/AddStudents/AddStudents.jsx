import React from 'react';
import { useDispatch } from 'react-redux';
import { registerNewStudent } from '../../actions/authActions';
import useForm from '../../hooks/useForm';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';

const AddStudents = (props) => {
  const { corteId } = props;
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
      dispatch(registerNewStudent(email, password, fullName, corteId));
      reset();
    }
  };
  return (
    <div>
      <FormModal onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='nombre completo'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='email'
          placeholder='correo electronico'
          name='email'
          value={email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='text'
          placeholder='contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='text'
          placeholder='confirmacion de contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Añadir Nuevo Estudiante</button>
      </FormModal>

    </div>
  );
};

export default AddStudents;
