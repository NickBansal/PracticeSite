import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { jsxEmptyExpression } from '@babel/types';
import LiveChatCard from '.';

describe('<LiveChatCard />', () => {
	it('should render a title', () => {
		const { getByText } = render(<LiveChatCard />);
		expect(getByText('Live')).toBeInTheDocument();
	});

	it('should display a sign in form when the button is clicked', () => {
		const { getByText, queryByRole } = render(<LiveChatCard />);

		expect(queryByRole('form')).not.toBeInTheDocument();
		expect(getByText('Click to Enter')).toBeInTheDocument();
		fireEvent.click(getByText('Click to Enter'));

		expect(queryByRole('form')).toBeInTheDocument();
		expect(getByText('Click to Leave')).toBeInTheDocument();
	});

	it('should go to the chat window and show the chat conversation', async () => {
		const { getByText, getAllByRole, getByRole } = render(<LiveChatCard />);

		fireEvent.click(getByText('Click to Enter'));

		const usernameInput = getAllByRole('textbox')[0];
		const chatRoom = getAllByRole('textbox')[1];

		fireEvent.change(usernameInput, {
			target: {
				value: 'Username'
			}
		});

		fireEvent.change(chatRoom, {
			target: {
				value: 'Room 1'
			}
		});

		fireEvent.click(getByText('Join room'));

		await wait();

		expect(getByRole('form')).toBeInTheDocument();
	});
});
