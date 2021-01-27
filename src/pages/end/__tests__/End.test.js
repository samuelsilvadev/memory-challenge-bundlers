import {fireEvent, render, waitFor} from '@testing-library/react';

import {useActiveUser} from 'state/active-user/useActiveUser';
import {useUser} from 'state/user/useUser';

import End from '../End';

const mockedPush = jest.fn();

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: mockedPush,
	}),
}));
jest.mock('state/active-user/useActiveUser', () => ({
	useActiveUser: jest.fn(),
}));
jest.mock('state/user/useUser', () => ({
	useUser: jest.fn(),
}));

describe('<End />', () => {
	describe('snapshots', () => {
		it('should render correctly', () => {
			useActiveUser.mockImplementationOnce(() => ({
				user: {
					name: 'mr robot',
				},
				actions: {
					resetActiveUser: jest.fn(),
				},
			}));
			useUser.mockImplementationOnce(() => ({
				scoreboard: {
					moves: 0,
					wins: 0,
				},
				actions: {},
			}));

			const {container, getByText, getAllByText} = render(<End />);

			expect(getByText('Congratulations')).toBeVisible();
			expect(getByText('Moves')).toBeVisible();
			expect(getByText('Correct Moves')).toBeVisible();
			expect(getByText('New game')).toBeVisible();
			expect(getAllByText('0')).toHaveLength(2);
			expect(container).toMatchSnapshot();
		});

		it('should render correctly if scoreboard is filled', () => {
			useActiveUser.mockImplementationOnce(() => ({
				user: {
					name: 'mr robot',
				},
				actions: {
					resetActiveUser: jest.fn(),
				},
			}));
			useUser.mockImplementationOnce(() => ({
				scoreboard: {
					moves: 24,
					wins: 8,
				},
				actions: {},
			}));

			const {container, getByText} = render(<End />);

			expect(getByText('Congratulations')).toBeVisible();
			expect(getByText('Moves')).toBeVisible();
			expect(getByText('Correct Moves')).toBeVisible();
			expect(getByText('New game')).toBeVisible();
			expect(getByText('24')).toBeVisible();
			expect(getByText('8')).toBeVisible();
			expect(container).toMatchSnapshot();
		});
	});

	describe('user actions', () => {
		it('should call resetActiveUser and push if user clicks on new game', async () => {
			const mockedResetActiveUser = jest.fn();
			useActiveUser.mockImplementationOnce(() => ({
				user: {
					name: 'mr robot',
				},
				actions: {
					resetActiveUser: mockedResetActiveUser,
				},
			}));
			useUser.mockImplementationOnce(() => ({
				scoreboard: {
					moves: 24,
					wins: 8,
				},
				actions: {},
			}));

			const {getByText} = render(<End />);

			const button = getByText('New game');

			fireEvent.click(button);

			await waitFor(() => {
				expect(mockedResetActiveUser).toHaveBeenCalledTimes(1);
				expect(mockedPush).toHaveBeenCalledTimes(1);
			});
		});
	});
});
