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
  myProjects: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      return {
        ...state,
        ...action.payload,
      }; }
    case types.logout: {
      return { ...state, uid: '', fullName: '', role: '' }; }
    case 'addFirestorePersonalProject':
      return {
        ...state,
        myProjects: action.payload,
      };
    default:
      return state;
  }
};

export const getFullName = (state) => state.auth.fullName;
export const getUserId = (state) => state.auth.uid;
export const getRole = (state) => state.auth.role;
export const getPhotoURL = (state) => state.auth.photoURL;
export const getCorteId = (state) => state.auth.corteId;
export const getMyProyects = (state) => state.auth.myProyects;
