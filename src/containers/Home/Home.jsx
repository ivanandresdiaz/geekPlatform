/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/logActions';

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.login.users);
  console.log(users);
  const [form, setForm] = useState({ name: '', password: '' });
  const [validarUser, setValidarUser] = useState(true);
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
      if (isUser[0].password === form.password) {
        console.log('submit', isUser);
        dispatch(login(isUser[0].name, isUser[0].password));
        props.history.push('/perfil');
      }
    } else {
      setValidarUser(false);
    }

  };
  // console.log(users);
  return (
    <div>
      <h1>Bienvenidos a Home</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input type='text' name='name' onChange={handleChange} />
        </label>
        <label>
          Contraseña
          <input type='password' name='password' onChange={handleChange} />
        </label>
        <button type='submit'>Ingresar</button>
      </form>
      <Link to='/registrarse'>
        Registrarse
      </Link>
      {validarUser ? null : <p>No existe usuario, Corrija o registrese</p>}
    </div>
  );
};

export default Home;
