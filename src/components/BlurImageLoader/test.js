import React from 'react';
import { render, act } from '@testing-library/react';
import BlurImageLoader from '.';

jest.useFakeTimers();

describe('<BlurImageLoader />', () => {
	let wrapper;
	let props;
	beforeEach(() => {
		props = {
			placeholder: 'test',
			image:
				'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
		};
		wrapper = render(<BlurImageLoader {...props}>Test</BlurImageLoader>);

		Object.defineProperty(global.Image.prototype, 'src', {
			set() {
				setTimeout(() => this.onload());
			}
		});
	});

	it('should render the image blurry', () => {
		expect(wrapper.getByText('Test')).toBeInTheDocument();
	});
	it('should render a clear image when the image has loaded', () => {
		expect(wrapper.getByText('Test')).toHaveStyleRule(
			'filter',
			'blur(30px)'
		);

		act(() => jest.runOnlyPendingTimers());

		expect(wrapper.getByText('Test')).toHaveStyleRule('filter', 'none');
	});
});
