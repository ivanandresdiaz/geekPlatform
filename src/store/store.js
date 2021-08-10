import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { teachersReducer } from '../reducers/teachersReducer';
import { bancoRecursosReducer } from '../reducers/bancoRecursosReducer';
import { adminReducer } from '../reducers/adminReducer';
import { studentsReducer } from '../reducers/studentsReducer';
import { salonReducer } from '../reducers/salonReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  bancoRecursos: bancoRecursosReducer,
  teachers: teachersReducer,
  admin: adminReducer,
  students: studentsReducer,
  salon: salonReducer,
});

const store = createStore(
  reducers, {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
export default store;
