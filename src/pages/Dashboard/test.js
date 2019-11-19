import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '.';

jest.mock('../../assets/flags');

describe('<Dashboard />', () => {
	it('should display multiple cards', () => {
		const { getAllByLabelText } = render(<Dashboard />);

		expect(getAllByLabelText('Display card').length).toBe(5);
	});
});
