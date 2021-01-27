import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {buildRootReducer} from './buildRootReducer';

export function buildStore(initialState = {}) {
	return createStore(buildRootReducer(), initialState, composeWithDevTools());
}
