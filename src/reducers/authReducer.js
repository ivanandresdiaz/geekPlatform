/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  uid: '',
  fullName: '',
  role: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        fullName: action.payload.displayName,
        role: action.payload.role,
      };
    case types.logout: {
      return { ...state, uid: '', fullName: '', role: '' }; }
    default:
      return state;
  }
};

export const getFullName = (state) => state.auth.fullName;
export const getRole = (state) => state.auth.role;
