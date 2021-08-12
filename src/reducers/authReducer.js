/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  uid: '',
  fullName: '',
  role: '',
  photoURL: '',
  active: '',
  bio: '',
  codelingoChallengesDone: [],
  corteId: '',
  email: '',
  facebook: '',
  geekyPuntos: '',
  github: '',
  graduated: '',
  instagram: '',
  linkedin: '',
  city: '',
  password: '',
  skills: [],
  sprintsAssigned: [],
  tutorialsRequired: [],
  twitter: '',
  wakatime: '',
  website: '',
  whatsapp: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      console.log('login', action.payload);
      return {
        ...state,
        ...action.payload,
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
export const getCorteId = (state) => state.auth.corteId;
