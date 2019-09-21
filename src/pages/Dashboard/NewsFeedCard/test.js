import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import NewsFeedCard from '.';

jest.mock('axios');

describe('<NewsFeedCard />', () => {
    it('should render a title', () => {
        axios.get.mockResolvedValue({
            data: {
                articles: [],
            },
        });
        const { getByText } = render(<NewsFeedCard />);
        expect(getByText('News feed')).toBeInTheDocument();
        expect(getByText('Refresh news')).toBeInTheDocument();
    });
});
