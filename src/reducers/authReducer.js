/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  uid: '',
  fullName: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        fullName: action.payload.displayName,
      };
    case types.logout: {
      return { ...state, uid: '', fullName: '' }; }
    default:
      return state;
  }
};

export const getFullName = (state) => state.auth.fullName;
