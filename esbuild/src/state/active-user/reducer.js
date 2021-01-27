export function reducer(state = {}, action = {}) {
	switch (action.type) {
		case 'CREATE_USER':
			return action.payload.user;
		case 'RESET_ACTIVE_USER':
			return {};
		default:
			return state;
	}
}
