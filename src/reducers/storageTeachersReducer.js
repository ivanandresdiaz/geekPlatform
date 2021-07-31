import { types } from '../types';

const initialState = {
  listTeachers: [],
};

export const storageTeachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'listarTeachers':
      return {
        ...state,
        listTeachers: [...action.payload],
      };
    default:
      return state;
  }
};

export const getListTeachers = (state) => state.listTeachers.listTeachers;
