import {combineReducers} from 'redux';
import {reducer as userReducer} from 'state/user/reducer';
import {reducer as activeUserReducer} from 'state/active-user/reducer';

export function buildRootReducer() {
	return combineReducers({users: userReducer, activeUser: activeUserReducer});
}
