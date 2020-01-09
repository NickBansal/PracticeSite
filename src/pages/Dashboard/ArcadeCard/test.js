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

	it('should show the tetris game', () => {
		const { getByText, queryByTestId, getByTestId } = render(
			<ArcadeCard rand="0" />
		);

		expect(queryByTestId('tetris')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));
		fireEvent.click(getByText('Tetris'));

		expect(getByTestId('tetris')).toBeInTheDocument();
	});

	it('should show the space invaders game', () => {
		const { getByText, queryByTestId, getByTestId } = render(
			<ArcadeCard rand="0" />
		);

		expect(queryByTestId('spaceInvaders')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));
		fireEvent.click(getByText('Space Invaders'));

		expect(getByTestId('spaceInvaders')).toBeInTheDocument();
	});
});
