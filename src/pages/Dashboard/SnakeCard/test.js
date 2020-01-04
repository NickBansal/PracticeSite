import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Snake from '.';

describe('<Snake />', () => {
	it('should start a new game of snake', async () => {
		const { getByText, queryByTestId, getByTestId } = render(
			<Snake rand="0" />
		);

		expect(queryByTestId('food')).not.toBeInTheDocument();
		expect(queryByTestId('snake')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));
		fireEvent.keyDown(document.body, { key: 'ArrowUp' });

		await waitForElement(() => getByTestId('food'));

		expect(getByTestId('food')).toBeInTheDocument();
		expect(getByTestId('snake')).toBeInTheDocument();
	});
});
