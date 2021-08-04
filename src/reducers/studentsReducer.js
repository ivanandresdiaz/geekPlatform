
import { types } from '../types';

const initialState = {
  studentsCorte: [],
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreStudentsCorte':
      return {
        ...state,
        studentsCorte: [...action.payload],
      };
    default:
      return state;
  }
};

export const getStudentsCorte = (state) => state.students.studentsCorte;
