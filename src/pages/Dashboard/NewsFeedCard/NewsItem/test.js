import React from 'react';
import { render } from '@testing-library/react';
import NewsItem from '.';

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
});
