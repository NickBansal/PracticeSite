import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import DrumLoop from '.';

jest.useFakeTimers();

describe('<DrumLoop />', () => {
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

	it('should increase the speed of the loop when the bpm is increased', () => {
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

	it('should pause the loop stop playing when the pause button is pressed', () => {
		const { getByText, getByLabelText } = render(<DrumLoop rand="0" />);

		fireEvent.click(getByText('Click to play'));

		expect(getByText('1')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.advanceTimersByTime(200));
		expect(getByText('2')).toHaveStyleRule('transform', 'scale(1.3)');
		act(() => jest.advanceTimersByTime(200));
		expect(getByText('3')).toHaveStyleRule('transform', 'scale(1.3)');

		fireEvent.click(getByLabelText('Play/Pause button'));

		act(() => jest.advanceTimersByTime(200));
		expect(getByText('3')).toHaveStyleRule('transform', 'scale(1.3)');
	});

	it('should reset the drumloop when the reset button is pressed', () => {
		const { getByText, getByLabelText, getAllByLabelText } = render(
			<DrumLoop rand="0" />
		);

		fireEvent.click(getByText('Click to play'));
		fireEvent.click(getByLabelText('Play/Pause button'));

		fireEvent.click(getByLabelText('Reset button'));

		const drumSamples = getAllByLabelText('drum-sample');

		drumSamples.forEach(drum => {
			expect(drum).toHaveStyleRule('background', '#000000a8');
		});
	});

	it('should change the volume levels when the volume button is pressed', () => {
		const { getByText, getByLabelText, getByTestId } = render(
			<DrumLoop rand="0" />
		);

		fireEvent.click(getByText('Click to play'));

		expect(getByTestId('volume-mute')).toBeInTheDocument();

		fireEvent.click(getByLabelText('Volume button'));

		expect(getByTestId('volume-down')).toBeInTheDocument();

		fireEvent.click(getByLabelText('Volume button'));

		expect(getByTestId('volume-up')).toBeInTheDocument();

		fireEvent.click(getByLabelText('Volume button'));

		expect(getByTestId('volume-mute')).toBeInTheDocument();
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
