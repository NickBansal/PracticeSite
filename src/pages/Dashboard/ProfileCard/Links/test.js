import React from 'react';
import { render } from '@testing-library/react';
import Links from '.';

describe('<Links />', () => {
    it('should render all the social media links', () => {
        const { getAllByRole } = render(<Links showlinks />);
        expect(getAllByRole('link')).toHaveLength(3);
    });
});
