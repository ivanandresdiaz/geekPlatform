import { types } from '../types';

const initialState = {
  cortes: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCortes':
      return {
        ...state,
        cortes: [...action.payload],
      };
    default:
      return state;
  }
};

export const getCortes = (state) => state.admin.cortes;
