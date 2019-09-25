import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Overlay from '.';

describe('<Overlay />', () => {
    it('should clost the modal when the x button is clicked', () => {
        const handleClick = jest.fn();
        const props = {
            showOverlay: true,
            handleClick,
        };
        const { getByText } = render(<Overlay {...props} />);

        expect(handleClick).not.toHaveBeenCalled();

        fireEvent.click(getByText('X'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
