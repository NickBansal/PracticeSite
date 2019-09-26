import React from 'react';
import { render } from '@testing-library/react';
import Contact from '.';

window.location.assign = jest.fn();

describe('<Contact />', () => {
	it('should render a title and an image', () => {
		const { getAllByLabelText } = render(<Contact />);

		expect(getAllByLabelText('contact icons')).toHaveLength(2);
	});
});
