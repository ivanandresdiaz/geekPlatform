/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  bancoRecursos: [],
};

export const bancoRecursosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadBancoRecursos:
      return {
        ...state,
        bancoRecursos: [...action.payload],
      };
    case types.addRecursoAcademico:
      return {
        ...state, bancoRecursos: [...state.bancoRecursos, ...action.payload],
      };
    case types.deleteRecurso:
      return { ...state, bancoRecursos: state.bancoRecursos.filter((recurso) => recurso.id !== action.payload) };
    default:
      return state;
  }
};

export const getBancoRecursos = (state) => state.bancoRecursos.bancoRecursos;
