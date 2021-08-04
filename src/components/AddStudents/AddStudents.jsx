import React from 'react';
import { useDispatch } from 'react-redux';
import { registerNewStudent } from '../../actions/authActions';
import useForm from '../../hooks/useForm';

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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre completo'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
          required
        />
        <input
          type='email'
          placeholder='correo electronico'
          name='email'
          value={email}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='confirmacion de contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Añadir Nuevo Estudiante</button>
      </form>

    </div>
  );
};

export default AddStudents;
