function validateUser(fn) {
	return (user) => {
		if (typeof user === 'undefined') {
			throw new TypeError('User can not be empty');
		}

		if (!('name' in user)) {
			throw new TypeError('User should have a name');
		}

		return fn(user);
	};
}

export const createUser = validateUser(function createUser(user) {
	return {
		type: 'CREATE_USER',
		payload: {user},
	};
});

export const countMove = validateUser(function countMove(user) {
	return {
		type: 'COUNT_MOVE',
		payload: {user},
	};
});

export const countWin = validateUser(function countWin(user) {
	return {
		type: 'COUNT_WIN',
		payload: {user},
	};
});
