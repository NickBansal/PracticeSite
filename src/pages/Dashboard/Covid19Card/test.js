import React from 'react';
import { render, fireEvent, wait, act } from '@testing-library/react';
import axios from 'axios';

import Covid19Card from '.';

jest.mock('axios');

describe('<Covid19Card />', () => {
	const resolvedData = () => {
		axios.get.mockResolvedValue({
			data: [
				{
					population: 1234,
					active: 12343,
					cases: 1234,
					deaths: 1234,
					recovered: 1234,
					tests: 1234,
					country: 'UK',
					countryInfo: {
						lat: 12,
						long: -13
					}
				},
				{
					population: 1234,
					active: 12343,
					cases: 1234,
					deaths: 1234,
					recovered: 1234,
					tests: 1234,
					country: 'USA',
					countryInfo: {
						lat: -54,
						long: 43
					}
				}
			]
		});
	};

	const rejectedData = () => {
		axios.get.mockRejectedValue(new Error('Async error'));
	};

	afterEach(axios.get.mockClear);

	it('should show correct covid 19 data on the map', () => {
		resolvedData();
		const { getByText } = render(<Covid19Card rand="" />);

		fireEvent.click(getByText('Click to view'));
		expect(getByText('Total cases', { exact: false })).toBeInTheDocument();

		fireEvent.click(getByText('Deaths'));
		expect(getByText('Total deaths', { exact: false })).toBeInTheDocument();

		fireEvent.click(getByText('Tests'));
		expect(getByText('Total tests', { exact: false })).toBeInTheDocument();
	});

	it('should show correct covid 19 data on the graph', async () => {
		resolvedData();
		const { getAllByText, getByText, getByTestId } = render(
			<Covid19Card rand="" />
		);

		fireEvent.click(getByText('Click to view'));

		await wait();

		fireEvent.click(getByText('Graph'));
		expect(getAllByText('UK')[1]).toBeInTheDocument();

		fireEvent.click(getByTestId('dropdown'));

		fireEvent.click(getByText('USA'));
		expect(getAllByText('USA')[1]).toBeInTheDocument();
	});

	it('should switch between graph data and map data', async () => {
		const { getByText } = render(<Covid19Card rand="" />);

		fireEvent.click(getByText('Click to view'));

		await wait();

		fireEvent.click(getByText('Graph'));

		expect(getByText('Graph')).toHaveStyleRule('background', '#ffae00');
		expect(getByText('Map')).toHaveStyleRule('background', 'none');

		fireEvent.click(getByText('Map'));

		expect(getByText('Map')).toHaveStyleRule('background', '#ffae00');
		expect(getByText('Graph')).toHaveStyleRule('background', 'none');
	});

	it('should show an error message if api call fails', async () => {
		rejectedData();
		const { getByText } = render(<Covid19Card rand="" />);

		fireEvent.click(getByText('Click to view'));

		await wait();

		expect(getByText('Error')).toBeInTheDocument();
	});
});
