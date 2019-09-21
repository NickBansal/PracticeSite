import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
    it('should render the children', () => {
        const { getByText } = render(<Button>Button Text</Button>);
        expect(getByText('Button Text')).toBeInTheDocument();
    });
    it('should call the correct function on the onClick event handler', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button handleClick={handleClick}>Submit</Button>);
        const submitBtn = getByText('Submit');

        expect(handleClick).not.toHaveBeenCalled();

        fireEvent.click(submitBtn);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
