import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewsSelect from '.';

const testFlags = ['./media/australia.1234.svg', './media/argentina.1234.svg'];

describe('<NewsSelect />', () => {
    let wrapper;
    const handleClick = jest.fn();

    beforeEach(() => {
        wrapper = render(<NewsSelect show flags={testFlags} handleClick={handleClick} />);
    });

    it('should render the modal', () => {
        expect(wrapper.getByLabelText('Country news selector')).toHaveStyleRule('height', '300px');

        wrapper.rerender(<NewsSelect show={false} flags={testFlags} />);

        expect(wrapper.getByLabelText('Country news selector')).toHaveStyleRule('height', '0px');
    });
    it('should call a function on the onClick event handler', () => {
        const flag = wrapper.getByLabelText('argentina flag');

        expect(handleClick).not.toHaveBeenCalled();

        fireEvent.click(flag);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
