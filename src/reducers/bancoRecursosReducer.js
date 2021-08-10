/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  bancoRecursos: [],
  subCategories: [],
  categories: [],
};

export const bancoRecursosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreSubcategories':
      return {
        ...state,
        subCategories: action.payload,
      };
    case 'addFirestoreNewCategoryAcademicResource':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export const getBancoRecursos = (state) => state.bancoRecursos.bancoRecursos;
export const getSubCategories = (state) => state.bancoRecursos.subCategories;
