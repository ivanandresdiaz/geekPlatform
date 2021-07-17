import { types } from '../types';

const initialState = {
  'users': [
    {
      'name': 'administrador',
      'password': 'administrador1',
    },
  ],
  'activeUser': { 'name': '', 'password': '', 'active': false },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, activeUser: { name: action.payload.name, password: action.payload.password, active: true } };

    case types.logout:
      return { ...state, activeUser: { name: '', password: '' } };
    case types.addUser:
      return { ...state, users: [...state.users, action.payload] };
    case types.cerrarSesion:
      return { ...state, activeUser: { name: '', password: '', active: false } };
    default:
      return state;
  }
};
export default loginReducer;
