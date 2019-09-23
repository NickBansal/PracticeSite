import React from 'react';
import { render } from '@testing-library/react';
import BlurImageLoader from '.';

describe('<BlurImageLoader />', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            placeholder: 'Test placeholder',
            image: 'Test image',
        };
        wrapper = render(<BlurImageLoader {...props}>Test</BlurImageLoader>);
    });

    it('should', () => {
        expect(wrapper.getByText('Test')).toBeInTheDocument();
    });
});
