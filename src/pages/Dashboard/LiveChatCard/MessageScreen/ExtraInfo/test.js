import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExtraInfo from '.';

describe('<ExtraInfo />', () => {
	it('should render the correct title', () => {
		const showInfo = jest.fn();
		const props = {
			showInfo,
			userDetails: {
				name: '',
				room: ''
			}
		};
		const { getByText } = render(<ExtraInfo {...props} />);
		expect(getByText('Chat room:')).toBeInTheDocument();
	});
	it('should call the correct function when the rows are clicked', () => {
		const showInfo = jest.fn();
		const props = {
			showInfo,
			userDetails: {
				name: '',
				room: ''
			}
		};
		const { getAllByRole } = render(<ExtraInfo {...props} />);

		expect(showInfo).not.toHaveBeenCalled();

		fireEvent.click(getAllByRole('row')[1]);

		expect(showInfo).toHaveBeenCalledWith(false);
		expect(showInfo).toHaveBeenCalledTimes(1);
	});
});
