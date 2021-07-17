import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../actions/logActions';
import { Form } from './styledRegistrarse';

const Registrarse = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.login.users);
  const resetForm = { name: '', password: '' };
  const [form, setForm] = useState(resetForm);
  const [validarContraseña, setValidarContraseña] = useState('');
  const [contraseñaValida, setContraseñaValida] = useState(true);
  const handleChange = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value,
    });
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    const isUser = users.filter((user) => user.name === form.name);
    if (isUser.length > 0) {
      alert(`el usuario ${form.name} ya existe. intente de nuevo`);
      setForm(resetForm);
    } else {
      dispatch(addUser(form.name, form.password));
      alert(`se ha añadido un nuevo usuario: ${form.name}`);
      setForm(resetForm);
      props.history.push('/');
    }

  };
  const handleValidatePassword = (evento) => {
    if (evento.target.value === form.password) {
      setContraseñaValida(false);
      setValidarContraseña('Valida, las contraseñas coinciden');
    } else {
      setContraseñaValida(true);
      setValidarContraseña('Las contraseñas no coinciden');
    }
  };
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Registrarse</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Nuevo Usuario
          <input type='text' name='name' onChange={handleChange} value={form.name} required />
        </label>
        <label>
          Contraseña
          <input type='password' name='password' onChange={handleChange} value={form.password} required />
        </label>
        <label>
          Comprobar contraseña
          <input type='password' name='password' onChange={handleValidatePassword} required />
        </label>
        <p>{validarContraseña}</p>
        <button type='submit' disabled={contraseñaValida}>Registrarme</button>
      </Form>

    </div>
  );
};

export default Registrarse;
