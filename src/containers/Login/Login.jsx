/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle, FcInvite } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { loginGoogle, loginFacebook, loginEmailPassword } from '../../actions/authActions';
import { DivContainerLogin, ContainerLogin } from './styledLogin';

const Login = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', password: '' });
  const handleChange = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value,
    });
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(loginEmailPassword(form.name, form.password));
  };
  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <DivContainerLogin>
      <ContainerLogin>
        <h1>Iniciar sesion</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Correo
            <input type='email' name='name' onChange={handleChange} />
          </label>
          <label>
            Contraseña
            <input type='password' name='password' onChange={handleChange} />
          </label>
          <button type='submit'>Ingresar</button>
        </form>
        <div onClick={handleLoginGoogle}>
          <FcGoogle size='4rem' />
          {' '}
          Ingresa con Google
        </div>

        <Link to='/auth/register'>
          Registrate con Correo
          <FcInvite size='4rem' />
        </Link>
      </ContainerLogin>
    </DivContainerLogin>

  );
};

export default Login;

