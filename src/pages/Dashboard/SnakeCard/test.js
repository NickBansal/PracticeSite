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

	it('should show a start meassage and a pause message when needed', () => {
		const { getByText, queryByText } = render(<Snake rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(
			getByText('Please press any arrow key to begin the game')
		).toBeInTheDocument();

		fireEvent.keyDown(document.body, { key: 'ArrowUp' });

		act(() => jest.advanceTimersByTime(60));

		fireEvent.keyDown(document.body, { key: 'Enter' });

		expect(
			getByText('Please press any arrow key to continue')
		).toBeInTheDocument();

		fireEvent.keyDown(document.body, { key: 'ArrowUp' });

		expect(
			queryByText('Please press any arrow key to continue')
		).not.toBeInTheDocument();
	});
});
