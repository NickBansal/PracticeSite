import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import ChatForm from '.';

describe('<ChatForm />', () => {
	it('should render the correct fields', () => {
		const { getByText } = render(<ChatForm />);

		expect(getByText('Chat Room:')).toBeInTheDocument();
		expect(getByText('Username:')).toBeInTheDocument();
	});

	it('should render error messages when the fields are empty', async () => {
		const { getByText, queryByText } = render(<ChatForm />);

		expect(queryByText('Username is a required field')).toBeNull();
		expect(queryByText('Chat room is a required field')).toBeNull();

		fireEvent.click(getByText('Submit'));

		await wait();

		expect(getByText('Username is a required field')).toBeInTheDocument();
		expect(getByText('Chat room is a required field')).toBeInTheDocument();
	});

	it('should render error messages when non alphanumeric characters are used', async () => {
		const { getByText, getAllByRole, queryByText } = render(<ChatForm />);

		const usernameInput = getAllByRole('textbox')[0];

		expect(queryByText('Alpha numeric characters only')).toBeNull();

		fireEvent.change(usernameInput, {
			target: {
				value: '!@£$'
			}
		});

		fireEvent.click(getByText('Submit'));

		await wait();

		expect(getByText('Alpha numeric characters only')).toBeInTheDocument();
	});

	it('should render error messages when over 50 characters are used', async () => {
		const { getByText, getAllByRole, queryByText } = render(<ChatForm />);

		const usernameInput = getAllByRole('textbox')[0];

		expect(
			queryByText('Username must be at most 50 characters')
		).toBeNull();

		fireEvent.change(usernameInput, {
			target: {
				value: 'e'.repeat(51)
			}
		});

		fireEvent.click(getByText('Submit'));

		await wait();

		expect(
			getByText('Username must be at most 50 characters')
		).toBeInTheDocument();
	});
});
