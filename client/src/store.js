import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [ thunk ];

const composeEnhancers = composeWithDevTools(
	{
		// options like actionSanitizer, stateSanitizer
	}
);
const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(
		applyMiddleware(...middleware)
		// other store enhancers if any
	)
);

/* const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); */

export default store;
