import React from 'react';
import { render } from '@testing-library/react';
import NewsSelect from '.';

describe('<NewsSelect />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<NewsSelect show />);
    });

    it('should render the modal', () => {
        expect(wrapper.getByLabelText('Country news select')).toHaveStyleRule('height', '290px');

        wrapper.rerender(<NewsSelect show={false} />);

        expect(wrapper.getByLabelText('Country news select')).toHaveStyleRule('height', '0px');
    });
});
