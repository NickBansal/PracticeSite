import React from 'react';
import { render } from '@testing-library/react';
import Contact from '.';

describe('<Contact />', () => {
	it('should render a title and an image', () => {
		const { getAllByRole } = render(<Contact />);

		expect(getAllByRole('link')).toHaveLength(2);
	});
});
