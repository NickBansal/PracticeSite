import React from 'react';
import { render } from '@testing-library/react';
import NewsSelect from '.';

const testFlags = ['./media/australia.1234.svg', './media/argentina.1234.svg', './media/brazil.1234.svg'];

describe('<NewsSelect />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<NewsSelect show flags={testFlags} />);
    });

    it('should render the modal', () => {
        expect(wrapper.getByLabelText('Country news selector')).toHaveStyleRule('height', '300px');

        wrapper.rerender(<NewsSelect show={false} flags={testFlags} />);

        expect(wrapper.getByLabelText('Country news selector')).toHaveStyleRule('height', '0px');
    });
});
