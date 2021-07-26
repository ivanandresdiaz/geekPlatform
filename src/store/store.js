import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { loggedReducer } from '../reducers/loggeReducer';
import { storageBancoRecursosReducer } from '../reducers/storageBancoRecursosReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  logged: loggedReducer,
  bancoRecursos: storageBancoRecursosReducer,
});

const store = createStore(
  reducers, {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
export default store;
