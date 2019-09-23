import React from 'react';
import { render, wait } from '@testing-library/react';
import BlurImageLoader from '.';


describe('<BlurImageLoader />', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            placeholder: 'test',
            image: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        };
        wrapper = render(<BlurImageLoader {...props}>Test</BlurImageLoader>);

        Object.defineProperty(global.Image.prototype, 'src', {
            set() {
                setTimeout(() => this.onload());
            },
        });
    });

    it('should render the image blurry', () => {
        expect(wrapper.getByText('Test')).toBeInTheDocument();
    });
    it('should render a clear image when the image has loaded', async () => {
        expect(wrapper.getByText('Test')).toHaveStyleRule('filter', 'blur(30px)');

        await wait();

        expect(wrapper.getByText('Test')).toHaveStyleRule('filter', 'none');
    });
});
