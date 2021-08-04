import { types } from '../types';

const initialState = {
  cortes: [],
  admin: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCortes':
      return {
        ...state,
        cortes: [...action.payload],
      };
    case 'listarAdmin':
      return {
        ...state,
        admin: [...action.payload],
      };
    default:
      return state;
  }
};

export const getCortes = (state) => state.admin.cortes;
export const getAdmin = (state) => state.admin.admin;
