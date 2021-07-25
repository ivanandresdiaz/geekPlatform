/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  uid: '',
  name: '',

};

export const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout: {
      return { ...state, uid: '', name: '' }; }
    default:
      return state;
  }
};

export const getName = (state) => state.logged.name;
