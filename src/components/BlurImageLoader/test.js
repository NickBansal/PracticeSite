import React from 'react';
import { render } from '@testing-library/react';
import BlurImageLoader from '.';

jest.useFakeTimers();

describe('<BlurImageLoader />', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            placeholder: 'Test placeholder',
            image: 'Test image',
        };
        wrapper = render(<BlurImageLoader {...props} />);
    });

    it('should', () => {
        expect(wrapper.getByPlaceholderText(props.placeholder)).toBeInTheDocument();

        jest.runOnlyPendingTimers();

        wrapper.debug();
    });
});
