import { types } from '../types';

const initialState = {
  teachers: [],
};

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'listarTeachers':
      return {
        ...state,
        teachers: [...action.payload],
      };
    default:
      return state;
  }
};

export const getTeachers = (state) => state.teachers.teachers;
