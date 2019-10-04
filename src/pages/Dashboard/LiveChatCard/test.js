import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LiveChatCard from '.';

describe('<LiveChatCard />', () => {
	it('should render a title', () => {
		const { getByText } = render(<LiveChatCard />);
		expect(getByText('Live')).toBeInTheDocument();
	});

	it('should display a sign in form when the button is clicked', () => {
		const { getByText, queryByRole } = render(<LiveChatCard />);

		expect(queryByRole('form')).not.toBeInTheDocument();
		expect(getByText('Click to Enter')).toBeInTheDocument();

		fireEvent.click(getByText('Click to Enter'));

		expect(queryByRole('form')).toBeInTheDocument();
		expect(getByText('Click to Leave')).toBeInTheDocument();
	});
});
