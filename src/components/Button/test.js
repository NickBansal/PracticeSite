import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
    it('should render the children', () => {
        const { getByText } = render(<Button onClick={() => { }}>Button Text</Button>);
        expect(getByText('Button Text')).toBeInTheDocument();
    });
    it('should call the correct function on the onClick event handler', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Submit</Button>);
        const submitBtn = getByText('Submit');

        expect(onClick).not.toHaveBeenCalled();

        fireEvent.click(submitBtn);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
