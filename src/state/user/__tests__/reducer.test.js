import {reducer} from '../reducer';

describe('User - Reducer', () => {
	it('should create an user', () => {
		const action = {
			type: 'CREATE_USER',
			payload: {
				user: {
					name: 'random',
				},
			},
		};
		const newState = reducer({}, action);

		expect(newState).toEqual({
			random: {
				moves: 0,
				wins: 0,
			},
		});
	});

	it('should count a move', () => {
		const previousState = {
			random: {
				moves: 0,
				wins: 0,
			},
		};
		const action = {
			type: 'COUNT_MOVE',
			payload: {
				user: {
					name: 'random',
				},
			},
		};
		const newState = reducer(previousState, action);

		expect(newState).toEqual({
			random: {
				moves: 1,
				wins: 0,
			},
		});
	});

	it('should count a win', () => {
		const previousState = {
			random: {
				moves: 1,
				wins: 0,
			},
		};
		const action = {
			type: 'COUNT_WIN',
			payload: {
				user: {
					name: 'random',
				},
			},
		};
		const newState = reducer(previousState, action);

		expect(newState).toEqual({
			random: {
				moves: 2,
				wins: 1,
			},
		});
	});

	it('should do nothing if action is unknown', () => {
		const previousState = {random: {wins: 10, moves: 20}};
		const action = {type: 'UNKNOWN'};
		const newState = reducer(previousState, action);

		expect(newState).toEqual(previousState);
	});

	it('should not broken if action is invalid', () => {
		const previousState = {random: {wins: 10, moves: 20}};
		const action = undefined;
		const newState = reducer(previousState, action);

		expect(newState).toEqual(previousState);
	});
});
