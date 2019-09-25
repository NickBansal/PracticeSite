import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfileCard from '.';

describe('<ProfileCard />', () => {
	it('should render a title', () => {
		const { getByText } = render(<ProfileCard />);
		expect(getByText('Nick Bansal')).toBeInTheDocument();
		expect(getByText('Junior Web Developer')).toBeInTheDocument();
	});
	it('should show the overlay when the button is clicked', () => {
		const { getByText, queryByLabelText, getByLabelText } = render(
			<ProfileCard />
		);

		expect(queryByLabelText('Overlay modal')).toBeNull();

		fireEvent.click(getByText('View full profile'));

		expect(getByLabelText('Overlay modal')).toBeInTheDocument();
	});
});
