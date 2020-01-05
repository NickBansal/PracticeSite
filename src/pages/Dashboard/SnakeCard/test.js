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

		fireEvent.keyDown(document.body, { key: 'ArrowDown' });

		expect(
			queryByText('Please press any arrow key to continue')
		).not.toBeInTheDocument();
	});

	it('should increase the snakes size when food is caught', () => {
		const { getByText, getAllByTestId } = render(<Snake rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(
			getByText('Please press any arrow key to begin the game')
		).toBeInTheDocument();

		fireEvent.keyDown(document.body, { key: 'ArrowRight' });

		act(() => jest.advanceTimersByTime(180));

		const snakeLength = getAllByTestId('snake');
		expect(snakeLength).toHaveLength(2);
		expect(getByText('Score: 1', { exact: false })).toBeInTheDocument();
	});

	it('should inform the player when game is over and restart the game when restart is clicked', () => {
		const { getByText } = render(<Snake rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(
			getByText('Please press any arrow key to begin the game')
		).toBeInTheDocument();

		fireEvent.keyDown(document.body, { key: 'ArrowRight' });

		act(() => jest.advanceTimersByTime(180));

		fireEvent.keyDown(document.body, { key: 'ArrowLeft' });

		act(() => jest.advanceTimersByTime(60));

		expect(getByText('GAMEOVER', { exact: false })).toBeInTheDocument();

		fireEvent.click(getByText('Start again?'));

		expect(
			getByText('Please press any arrow key to begin the game')
		).toBeInTheDocument();
	});
});
