import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from '.';

describe('<ProfileCard />', () => {
    it('should render a title', () => {
        const { getByText } = render(<ProfileCard />);
        expect(getByText('Nick Bansal')).toBeInTheDocument();
        expect(getByText('Junior Web Developer')).toBeInTheDocument();
    });
});
