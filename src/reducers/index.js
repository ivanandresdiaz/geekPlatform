/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
