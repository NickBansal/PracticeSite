import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '.';

describe('<Card />', () => {
	it('should animate with the correct fadein times', () => {
		const fadeInTime = '0.5s';
		const { getByLabelText } = render(
			<Card fadeIn={fadeInTime}>Hello</Card>
		);
		expect(getByLabelText('Display card')).toHaveStyleRule(
			'animation',
			`${fadeInTime} linear fade 1`
		);
	});
	it('should render the correct children', () => {
		const fadeInTime = '0.5s';
		const { getByText } = render(<Card fadeIn={fadeInTime}>Hello</Card>);
		expect(getByText('Hello')).toBeInTheDocument();
	});
	it('should call the correct function when the button is clicked', () => {
		const handleClick = jest.fn();
		const fadeInTime = '0.5s';
		const { getByText } = render(
			<Card fadeIn={fadeInTime}>
				<Card.Title>Test Title</Card.Title>
				Hello
				<Card.Button onClick={handleClick}>Test Button</Card.Button>
			</Card>
		);

		expect(handleClick).not.toHaveBeenCalled();

		fireEvent.click(getByText('Test Button'));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
