import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
// import mockio, { serverSocket, cleanUp } from 'socket.io-client';
import NewsFeedCard from '.';

jest.mock('axios');
jest.mock('socket.io-client');

jest.useFakeTimers();

describe('<NewsFeedCard />', () => {
    it('should render a title', () => {
        axios.get.mockResolvedValue({
            data: {
                articles: [],
            },
        });
        const { getByText } = render(<NewsFeedCard />);
        // serverSocket.on();
        expect(getByText('Live news feed')).toBeInTheDocument();
        expect(getByText('Select news')).toBeInTheDocument();
    });
});
