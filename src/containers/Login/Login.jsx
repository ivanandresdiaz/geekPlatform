/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle, FcInvite } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { loginGoogle, loginFacebook, loginEmailPassword } from '../../actions/authActions';
import { DivContainerLogin, ContainerLogin, TitleLogin, FormInput, LabelLogin, FormLogin, SubtitleLogin, ResetPassword } from '../../styles/styledLogin';
import Navbar from '../../components/Structure/Navbar';
import { Button2 } from '../../globalStyles';

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
    <>
      <Navbar />
      <DivContainerLogin>
        <ContainerLogin>
          <TitleLogin>Inicia sesión en GeekPlatform</TitleLogin>
          <FormLogin onSubmit={handleSubmit}>
            <LabelLogin>
              Correo
              <FormInput type='email' name='name' onChange={handleChange} />
            </LabelLogin>
            <LabelLogin>
              Contraseña
              <FormInput type='password' name='password' onChange={handleChange} />
            </LabelLogin>
            <Button2 type='submit'>Ingresar</Button2>
            <ResetPassword>¿Olvidaste tu contraseña?</ResetPassword>
          </FormLogin>
          <hr/>
          <SubtitleLogin>¿Aún no tienes cuenta en GeekPlatform?</SubtitleLogin>
          <Button2><a href='https://academiageek.co/admisiones/' target='blank' aria-label='Compañia'>Póstulate</a></Button2>
        </ContainerLogin>
      </DivContainerLogin>
    </>
  );
};

export default Login;

