import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfileCard from '.';

describe('<ProfileCard />', () => {
	it('should render a title', () => {
		const { getByText } = render(<ProfileCard rand="0" />);
		expect(getByText('Nick Bansal')).toBeInTheDocument();
		expect(getByText('Junior Web Developer')).toBeInTheDocument();
	});
	it('should show the profile card when the button is clicked', () => {
		const {
			getByText,
			queryByLabelText,
			getByLabelText,
			getByAltText,
			getAllByLabelText,
			getAllByRole
		} = render(<ProfileCard rand="0" />);

		expect(queryByLabelText('Overlay modal')).toBeNull();

		fireEvent.click(getByText('View full profile'));

		expect(getByLabelText('Overlay modal')).toBeInTheDocument();
		expect(getByAltText('Me')).toBeInTheDocument();
		expect(getAllByLabelText('programming icons')).toHaveLength(5);
		expect(getAllByRole('link')).toHaveLength(5);
	});
});
