import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewsItem from '.';

window.open = jest.fn();

describe('<NewsItem />', () => {
    it('should render an image', () => {
        const props = {
            news: {
                title: 'test title',
                urlToImage: 'test image',
                url: 'Test url',
            },
        };
        const { getByText } = render(<NewsItem {...props} />);
        expect(getByText(props.news.title)).toBeInTheDocument();
        expect(getByText('Read more')).toBeInTheDocument();
    });

    it('should open a new window on the onClick', () => {
        const props = {
            news: {
                title: 'test title',
                urlToImage: 'test image',
                url: 'Test url',
            },
        };
        const { getByLabelText } = render(<NewsItem {...props} />);

        expect(window.open).not.toBeCalled();

        fireEvent.click(getByLabelText('News item'));
        expect(window.open).toBeCalledWith('Test url');
    });
});
