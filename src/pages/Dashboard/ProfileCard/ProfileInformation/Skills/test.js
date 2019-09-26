import React from 'react';
import { render } from '@testing-library/react';
import Skills from '.';

describe('<Skills />', () => {
	it('should render a title and an image', () => {
		const { getAllByLabelText } = render(<Skills />);

		expect(getAllByLabelText('programming icons')).toHaveLength(5);
	});
});
