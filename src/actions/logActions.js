/* eslint-disable import/prefer-default-export */
import { types } from '../types';

export const login = (name, password) => {
  return {
    type: types.login,
    payload: {
      name,
      password,
      active: true,
    },
  };
};

export const addUser = (name, password) => {
  return {
    type: types.addUser,
    payload: {
      name,
      password,
    },
  };
};

export const cerrarSesion = () => {
  return { type: types.cerrarSesion };
};
