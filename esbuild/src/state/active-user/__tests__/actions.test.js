import {resetActiveUser} from '../actions';

describe('Active User - Actions', () => {
	it('should get a RESET_ACTIVE_USER', () => {
		const action = resetActiveUser();

		expect(action).toEqual({
			type: 'RESET_ACTIVE_USER',
		});
	});
});
