import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Home from '../Home';

describe('<Home />', () => {
	it('should render all elements', () => {
		const {getByText} = render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		);

		expect(getByText('Memory Challenge')).toBeVisible();
		expect(getByText('Start')).toBeVisible();
	});
});
