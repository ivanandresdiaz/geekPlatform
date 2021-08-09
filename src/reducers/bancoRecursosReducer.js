/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  bancoRecursos: [],
};

export const bancoRecursosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getBancoRecursos = (state) => state.bancoRecursos.bancoRecursos;
