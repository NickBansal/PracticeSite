import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExtraInfo from '.';

describe('<ExtraInfo />', () => {
	it('should render the correct title', () => {
		const { getByText } = render(<ExtraInfo showInfo={jest.fn()} />);
		expect(getByText('Chat room:')).toBeInTheDocument();
	});
	it('should call the correct function when the rows are clicked', () => {
		const showInfo = jest.fn();
		const { getAllByRole } = render(<ExtraInfo showInfo={showInfo} />);

		expect(showInfo).not.toHaveBeenCalled();

		fireEvent.click(getAllByRole('row')[0]);
		fireEvent.click(getAllByRole('row')[1]);

		expect(showInfo).toHaveBeenCalledWith(false);
		expect(showInfo).toHaveBeenCalledTimes(2);
	});
});
