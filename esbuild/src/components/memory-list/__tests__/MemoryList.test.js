import {fireEvent, render, waitFor} from '@testing-library/react';

import MemoryList from '../MemoryList';

const mockedCountMove = jest.fn();
const mockedCountWin = jest.fn();
const mockedPush = jest.fn();

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: mockedPush,
	}),
}));
jest.mock('state/active-user/useActiveUser', () => ({
	useActiveUser: () => ({
		user: {
			name: 'mr robot',
		},
	}),
}));
jest.mock('state/user/useUser', () => ({
	useUser: () => ({
		actions: {
			countMove: mockedCountMove,
			countWin: mockedCountWin,
		},
	}),
}));

describe('<MemoryList />', () => {
	describe('snapshots', () => {
		it('should render correctly an empty list of cards', () => {
			const {container} = render(<MemoryList />);

			expect(container.firstChild).toBeNull();
		});

		it('should render correctly a list of cards', () => {
			const {container, getAllByRole} = render(
				<MemoryList figures={[1, 1, 2, 2]} />
			);

			const buttons = getAllByRole('button');

			expect(buttons).toHaveLength(4);
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	describe('user movements', () => {
		it('should open card figure if user clicks on card', async () => {
			const {getAllByRole, queryAllByText, getByText} = render(
				<MemoryList figures={['text1', 'text1', 'text2', 'text2']} />
			);

			const buttons = getAllByRole('button');
			const text1Buttons = queryAllByText('text1');

			expect(text1Buttons).toHaveLength(0);

			fireEvent.click(buttons[0]);

			await waitFor(() => {
				const text1Button = getByText('text1');

				expect(text1Button).toBeVisible();
			});
		});

		it('should count wins if user guess the cards right', async () => {
			const {getAllByRole, getAllByText} = render(
				<MemoryList figures={['text1', 'text1', 'text2', 'text2']} />
			);

			const buttons = getAllByRole('button');

			fireEvent.click(buttons[0]);
			fireEvent.click(buttons[1]);

			await waitFor(() => {
				const text1Buttons = getAllByText('text1');

				expect(text1Buttons).toHaveLength(2);

				expect(mockedCountMove).toHaveBeenCalledTimes(1);
				expect(mockedCountWin).toHaveBeenCalledTimes(1);
			});
		});

		it('should redirect to end game route if user guess every card', async () => {
			const {getAllByRole, getAllByText} = render(
				<MemoryList figures={['text1', 'text1', 'text2', 'text2']} />
			);

			const buttons = getAllByRole('button');

			fireEvent.click(buttons[0]);
			fireEvent.click(buttons[1]);
			fireEvent.click(buttons[2]);
			fireEvent.click(buttons[3]);

			await waitFor(() => {
				const text1Buttons = getAllByText('text1');
				const text2Buttons = getAllByText('text2');

				expect(text1Buttons).toHaveLength(2);
				expect(text2Buttons).toHaveLength(2);

				expect(mockedCountMove).toHaveBeenCalledTimes(2);
				expect(mockedCountWin).toHaveBeenCalledTimes(2);
				expect(mockedPush).toHaveBeenCalledTimes(1);
			});
		});

		it('should close cards if user guess card wrong', async () => {
			const {getAllByRole, getByText, queryByText} = render(
				<MemoryList figures={['text1', 'text2', 'text1', 'text2']} />
			);

			const buttons = getAllByRole('button');

			fireEvent.click(buttons[0]);
			fireEvent.click(buttons[1]);

			await waitFor(() => {
				const text1Button = getByText('text1');
				const text2Button = getByText('text2');

				expect(text1Button).toBeVisible();
				expect(text2Button).toBeVisible();

				expect(mockedCountMove).toHaveBeenCalledTimes(1);
				expect(mockedCountWin).not.toHaveBeenCalled();
			});

			fireEvent.click(buttons[2]);

			await waitFor(() => {
				const text1Button = getByText('text1');
				const text2Button = queryByText('text2');

				expect(text1Button).toBeVisible();
				expect(text2Button).not.toBeInTheDocument();

				expect(mockedCountMove).toHaveBeenCalledTimes(1);
				expect(mockedCountWin).not.toHaveBeenCalled();
			});
		});
	});
});
