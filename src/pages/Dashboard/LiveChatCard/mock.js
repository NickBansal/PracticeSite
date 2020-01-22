import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import LiveChatCard from '.';

describe('<LiveChatCard />', () => {
	it('should render a title', () => {
		const { getByText } = render(<LiveChatCard rand="0" />);
		expect(getByText('Live')).toBeInTheDocument();
	});

	it('should sign in and out of the chat room', async () => {
		const { getByText, queryByRole, getAllByRole } = render(
			<LiveChatCard rand="0" />
		);

		expect(queryByRole('form')).not.toBeInTheDocument();
		expect(getByText('Click to Enter')).toBeInTheDocument();
		fireEvent.click(getByText('Click to Enter'));

		const username = getAllByRole('textbox')[0];
		const room = getAllByRole('textbox')[1];

		fireEvent.change(username, {
			target: {
				value: 'Nick'
			}
		});

		fireEvent.change(room, {
			target: {
				value: '123'
			}
		});

		fireEvent.click(getByText('Join room'));

		await wait();

		expect(queryByRole('form')).toBeInTheDocument();
		expect(getByText('Click to Leave')).toBeInTheDocument();

		fireEvent.click(getByText('Click to Leave'));
		expect(queryByRole('form')).not.toBeInTheDocument();
	});
});
