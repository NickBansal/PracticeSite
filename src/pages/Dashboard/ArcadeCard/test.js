import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ArcadeCard from '.';

describe('<ArcadeCard />', () => {
	it('should show the snake game', () => {
		const { getByText, queryByText } = render(<ArcadeCard rand="0" />);

		expect(queryByText('Welcome to snake')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));

		expect(getByText('Welcome to snake')).toBeInTheDocument();
	});
});
