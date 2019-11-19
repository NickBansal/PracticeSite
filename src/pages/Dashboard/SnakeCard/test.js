import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Snake from '.';

describe('<Snake />', () => {
	it('should start a new game of snake', () => {
		const { getByText, debug, queryByTestId, getByTestId } = render(
			<Snake />
		);

		expect(queryByTestId('food')).not.toBeInTheDocument();
		expect(queryByTestId('snake')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));

		expect(getByTestId('food')).toBeInTheDocument();
		expect(queryByTestId('snake')).toBeInTheDocument();

		debug();
	});
});
