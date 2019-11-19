import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import DrumLoop from '.';

jest.useFakeTimers();

describe('<DrumLoop />', () => {
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
	it('should display a drum track', () => {
		const { getByText, queryByText } = render(<DrumLoop />);

		expect(queryByText('Kick')).not.toBeInTheDocument();
		expect(queryByText('Snare')).not.toBeInTheDocument();
		expect(queryByText('Closed')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));

		expect(getByText('Kick')).toBeInTheDocument();
		expect(getByText('Snare')).toBeInTheDocument();
		expect(getByText('Closed')).toBeInTheDocument();
	});

	it('should start a new drum loop', () => {
		const { getByText, getByLabelText } = render(<DrumLoop />);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		jest.runOnlyPendingTimers();

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1)');
		expect(getByText('2')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should add a new drum sample when a square is clicked and change color', () => {
		const { getAllByLabelText, debug, getByText } = render(<DrumLoop />);

		fireEvent.click(getByText('Click to play'));

		const drumSample = getAllByLabelText('drum-sample')[0];

		expect(drumSample).toHaveStyleRule('background', '#000000a8');

		fireEvent.click(drumSample);

		expect(drumSample).toHaveStyleRule('background', '#c27f82');

		debug();
	});
});
