import {createUser, countMove, countWin} from '../actions';

describe('User - Actions', () => {
	it('should get a CREATE_USER action', () => {
		const action = createUser({name: 'mr robot'});

		expect(action).toEqual({
			type: 'CREATE_USER',
			payload: {
				user: {
					name: 'mr robot',
				},
			},
		});
	});

	it('should get a COUNT_MOVE action', () => {
		const action = countMove({name: 'mr robot'});

		expect(action).toEqual({
			type: 'COUNT_MOVE',
			payload: {
				user: {
					name: 'mr robot',
				},
			},
		});
	});

	it('should get a COUNT_WIN action', () => {
		const action = countWin({name: 'mr robot'});

		expect(action).toEqual({
			type: 'COUNT_WIN',
			payload: {
				user: {
					name: 'mr robot',
				},
			},
		});
	});

	describe('user validations', () => {
		describe('createUser', () => {
			it('should throw an error if user is undefined', () => {
				expect(createUser).toThrow();
				expect(createUser).toThrowError('User can not be empty');
			});

			it('should throw an error if user has no name property', () => {
				expect(() => createUser({})).toThrow();
				expect(() => createUser({})).toThrowError(
					'User should have a name'
				);
			});
		});

		describe('countMove', () => {
			it('should throw an error if user is undefined', () => {
				expect(countMove).toThrow();
				expect(countMove).toThrowError('User can not be empty');
			});

			it('should throw an error if user has no name property', () => {
				expect(() => countMove({})).toThrow();
				expect(() => countMove({})).toThrowError(
					'User should have a name'
				);
			});
		});

		describe('countWin', () => {
			it('should throw an error if user is undefined', () => {
				expect(countWin).toThrow();
				expect(countWin).toThrowError('User can not be empty');
			});

			it('should throw an error if user has no name property', () => {
				expect(() => countWin({})).toThrow();
				expect(() => countWin({})).toThrowError(
					'User should have a name'
				);
			});
		});
	});
});
