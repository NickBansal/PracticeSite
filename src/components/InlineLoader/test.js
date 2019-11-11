import React from 'react';
import { render } from '@testing-library/react';

import { colors } from '../../utils/globalStyles/constants';
import InlineLoader from '.';

describe('InlineLoader', () => {
	it('should render the loader when isLoading', () => {
		const { container } = render(<InlineLoader isLoading />);
		expect(container.firstChild.tagName).toEqual('svg');
	});

	it('should not render the loader when isLoading is false', () => {
		const { container } = render(<InlineLoader isLoading={false} />);
		expect(container.firstChild).toEqual(null);
	});

	it('should have default colors', () => {
		const { container } = render(<InlineLoader isLoading />);
		expect(container.firstChild.querySelector('circle')).toHaveStyleRule(
			'stroke',
			'currentColor'
		);
	});

	it('should change the colors when standalone', () => {
		const { container } = render(<InlineLoader isLoading standalone />);
		expect(container.firstChild.querySelector('circle')).toHaveStyleRule(
			'stroke',
			colors.red
		);
	});

	it('should change the width and height when size is specified', () => {
		const { container } = render(<InlineLoader isLoading size="50px" />);

		expect(container.firstChild).toHaveStyleRule('height', '50px');
		expect(container.firstChild).toHaveStyleRule('width', '50px');
	});
});
