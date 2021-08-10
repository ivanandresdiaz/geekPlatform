/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  uid: '',
  fullName: '',
  role: '',
  photoURL: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      let photoURL = '';
      if (action.payload.photoURL) {
        photoURL = action.payload.photoURL;
      }
      return {
        ...state,
        uid: action.payload.uid,
        fullName: action.payload.displayName,
        role: action.payload.role,
        photoURL,
      }; }
    case types.logout: {
      return { ...state, uid: '', fullName: '', role: '' }; }
    default:
      return state;
  }
};

export const getFullName = (state) => state.auth.fullName;
export const getUserId = (state) => state.auth.uid;
export const getRole = (state) => state.auth.role;
export const getPhotoURL = (state) => state.auth.photoURL;
