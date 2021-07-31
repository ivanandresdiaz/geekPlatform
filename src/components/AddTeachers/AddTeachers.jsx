import React from 'react';
import { useDispatch } from 'react-redux';
import { registerWithEmailPasswordTeacher } from '../../actions/authActions';
import useForm from '../../hooks/useForm';

const AddTeachers = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const { username, email, name, password, confirmPassword } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      console.log(formValues);
      dispatch(registerWithEmailPasswordTeacher(username, email, name, password));
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre de usuario unico'
          name='username'
          value={username}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='nombre completo del docente'
          name='name'
          value={name}
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
        <button type='submit'>Añadir nuevo Profesor</button>
      </form>

    </div>
  );
};

export default AddTeachers;
