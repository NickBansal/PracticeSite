import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import MusicPlayer from '.';

jest.mock('react-player/lazy');

describe('<MusicPlayer />', () => {
	it('should render a loading spinner', async () => {
		const { getByText, getByTestId, debug } = render(
			<MusicPlayer rand="" />
		);

		fireEvent.click(getByText('Click to play'));

		expect(getByTestId('loader')).toBeInTheDocument();

		await wait();
	});
});
