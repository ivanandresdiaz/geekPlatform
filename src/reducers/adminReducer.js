import { types } from '../types';

const initialState = {
  cortes: [],
  admin: [],
  salones: [],

};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCortes':
      return {
        ...state,
        cortes: [...action.payload],
      };
    case 'updateCortes':
      return {
        ...state,
        cortes: [...state.cortes, action.payload],
      };
    case 'listarAdmin':
      return {
        ...state,
        admin: [...action.payload],
      };
    case 'updateListarAdmin':
      return {
        ...state,
        admin: [...state.admin, action.payload],
      };
    case 'getFirestoreSalones':
      return {
        ...state,
        salones: [...action.payload],
      };
    default:
      return state;
  }
};

export const getCortes = (state) => state.admin.cortes;
export const getAdmin = (state) => state.admin.admin;
export const getSalones = (state) => state.admin.salones;
