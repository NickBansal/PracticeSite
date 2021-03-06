import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Snake from '.';

jest.useFakeTimers();

describe('<Snake />', () => {
	beforeEach(() => {
		Object.defineProperty(
			global.window.HTMLMediaElement.prototype,
			'play',
			{
				configurable: true,

				get() {
					setTimeout(() => this.onloadeddata && this.onloadeddata());
					return () => {};
				}
			}
		);
	});
	it('should start a new game of snake', () => {
		const { queryByTestId, getByTestId } = render(<Snake />);

		expect(queryByTestId('food')).not.toBeInTheDocument();
		expect(queryByTestId('snake')).not.toBeInTheDocument();

		fireEvent.keyDown(document.body, { key: 'ArrowUp' });

		act(() => jest.advanceTimersByTime(60));

		expect(getByTestId('food')).toBeInTheDocument();
		expect(getByTestId('snake')).toBeInTheDocument();
	});

	it('should show a start meassage and a pause message when needed', () => {
		const { getByText, queryByText } = render(<Snake />);

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

	it('should increase the snakes size and increase the score when food is caught', () => {
		const { getByText, getAllByTestId } = render(<Snake />);

		fireEvent.keyDown(document.body, { key: 'ArrowRight' });

		act(() => jest.advanceTimersByTime(180));

		const snakeLength = getAllByTestId('snake');
		expect(snakeLength).toHaveLength(2);
		expect(getByText('Score: 1', { exact: false })).toBeInTheDocument();
	});

	it('should inform the player when game is over and restart the game when restart is clicked', () => {
		const { getByText } = render(<Snake />);

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
