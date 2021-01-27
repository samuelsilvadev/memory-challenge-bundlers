export function reducer(state = {}, action = {}) {
	switch (action.type) {
		case 'CREATE_USER': {
			return {
				...state,
				[action.payload.user.name]: {
					moves: 0,
					wins: 0,
				},
			};
		}
		case 'COUNT_MOVE': {
			const userName = action.payload.user.name;

			return {
				...state,
				[userName]: {
					...state[userName],
					moves: ++state[userName].moves,
				},
			};
		}
		case 'COUNT_WIN': {
			const userName = action.payload.user.name;

			return {
				...state,
				[userName]: {
					...state[userName],
					wins: ++state[userName].wins,
					moves: ++state[userName].moves,
				},
			};
		}
		default:
			return state;
	}
}
