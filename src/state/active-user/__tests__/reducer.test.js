import {reducer} from '../reducer';

describe('Active user - reducer', () => {
	it('should set an active user', () => {
		const previouState = {};
		const action = {
			type: 'CREATE_USER',
			payload: {
				user: {
					name: 'mr robot',
				},
			},
		};
		const newState = reducer(previouState, action);

		expect(newState).toEqual({
			name: 'mr robot',
		});
	});

	it('should reset user', () => {
		const previouState = {
			name: 'mr robot',
		};
		const action = {
			type: 'RESET_ACTIVE_USER',
		};
		const newState = reducer(previouState, action);

		expect(newState).toEqual({});
	});

	it('should do nothing if action is unknown', () => {
		const previousState = {name: 'mr robot'};
		const action = {type: 'UNKNOWN'};
		const newState = reducer(previousState, action);

		expect(newState).toEqual(previousState);
	});

	it('should not broken if action is invalid', () => {
		const previousState = {name: 'mr robot'};
		const action = undefined;
		const newState = reducer(previousState, action);

		expect(newState).toEqual(previousState);
	});
});
