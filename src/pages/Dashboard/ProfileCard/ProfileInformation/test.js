import React from 'react';
import { render } from '@testing-library/react';
import ProfileInformation from '.';

describe('<ProfileInformation />', () => {
	it('should render a title and an image', () => {
		const { getByText, getByAltText } = render(<ProfileInformation />);

		expect(getByText('Nick Bansal')).toBeInTheDocument();
		expect(getByAltText('Me')).toBeInTheDocument();
	});
});
