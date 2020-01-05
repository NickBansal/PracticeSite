import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
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
		const { getByText, queryByText } = render(<DrumLoop rand="0" />);

		expect(queryByText('Kick')).not.toBeInTheDocument();
		expect(queryByText('Snare')).not.toBeInTheDocument();
		expect(queryByText('Closed')).not.toBeInTheDocument();

		fireEvent.click(getByText('Click to play'));

		expect(getByText('Kick')).toBeInTheDocument();
		expect(getByText('Snare')).toBeInTheDocument();
		expect(getByText('Closed')).toBeInTheDocument();
	});

	it('should start a new drum loop', () => {
		const { getByText, getByLabelText } = render(<DrumLoop rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.runOnlyPendingTimers());

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1)');
		expect(getByText('2')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should restart the drum loop once its hit the end', () => {
		const { getByText, getByLabelText } = render(<DrumLoop rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.advanceTimersByTime(3000));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should increase the speed of the bpm is increased', () => {
		const { getByText, getByLabelText, getByRole } = render(
			<DrumLoop rand="0" />
		);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.advanceTimersByTime(200));
		expect(getByText('2')).toHaveStyleRule('transform', 'scale(1.3)');
		act(() => jest.advanceTimersByTime(200));
		expect(getByText('3')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.change(getByRole('textbox'), { target: { value: 180 } });

		act(() => jest.advanceTimersByTime(90));
		expect(getByText('4')).toHaveStyleRule('transform', 'scale(1.3)');
		act(() => jest.advanceTimersByTime(90));
		expect(getByText('5')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should go back to the beginning and stop playing when the stop button is pressed', () => {
		const { getByText, getByLabelText } = render(<DrumLoop rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.advanceTimersByTime(200));
		expect(getByText('2')).toHaveStyleRule('transform', 'scale(1.3)');
		act(() => jest.advanceTimersByTime(200));
		expect(getByText('3')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Stop button'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');
		act(() => jest.advanceTimersByTime(200));
		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should add a new drum sample when a square is clicked and change color', () => {
		const { getAllByLabelText, getByText } = render(<DrumLoop rand="0" />);

		fireEvent.click(getByText('Click to play'));

		const drumSample = getAllByLabelText('drum-sample')[0];

		expect(drumSample).toHaveStyleRule('background', '#000000a8');

		fireEvent.click(drumSample);

		expect(drumSample).toHaveStyleRule('background', '#c27f82');
	});
});
