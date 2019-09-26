import React from 'react';
import { render } from '@testing-library/react';
import Links from '.';

describe('<Links />', () => {
	it('should render a title and an image', () => {
		const { getAllByRole } = render(<Links />);

		expect(getAllByRole('link')).toHaveLength(3);
	});
});
