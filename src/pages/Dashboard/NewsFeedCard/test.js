import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewsFeedCard from '.';

jest.mock('../../../assets/flags');

describe('<NewsFeedCard />', () => {
	it('should display a list of countries when the button is clicked', () => {
		const { getByText, getByLabelText } = render(<NewsFeedCard rand="0" />);

		expect(getByLabelText('Country news selector')).toHaveStyleRule(
			'height',
			'0px'
		);

		fireEvent.click(getByText('Select country'));

		expect(getByLabelText('Country news selector')).toHaveStyleRule(
			'height',
			'300px'
		);
	});
});
