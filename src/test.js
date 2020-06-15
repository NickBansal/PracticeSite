import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './App';

jest.mock('./assets/flags');

describe('<Dashboard />', () => {
	it('should display multiple cards', () => {
		const { getAllByLabelText } = render(<Dashboard />);

		const { length } = getAllByLabelText('Display card');

		expect(getAllByLabelText('Display card')).toHaveLength(length);
	});
});
