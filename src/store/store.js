import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { teachersReducer } from '../reducers/teachersReducer';
import { bancoRecursosReducer } from '../reducers/bancoRecursosReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  bancoRecursos: bancoRecursosReducer,
  teachers: teachersReducer,
});

const store = createStore(
  reducers, {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
export default store;
