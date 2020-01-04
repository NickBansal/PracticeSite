import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Snake from '.';

jest.useFakeTimers();

describe('<Snake />', () => {
	it('should start a new game of snake', () => {
		const { getByText, queryByTestId, getByTestId } = render(
			<Snake rand="0" />
		);

		expect(queryByTestId('food')).not.toBeInTheDocument();
		expect(queryByTestId('snake')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));
		fireEvent.keyDown(document.body, { key: 'ArrowUp' });

		act(() => jest.advanceTimersByTime(60));

		expect(getByTestId('food')).toBeInTheDocument();
		expect(getByTestId('snake')).toBeInTheDocument();
	});
});
