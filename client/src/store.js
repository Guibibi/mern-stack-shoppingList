import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
/* import { composeWithDevTools } from 'redux-devtools-extension'; */

const initialState = {};

const middleware = [ thunk ];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

/* const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); */

export default store;
