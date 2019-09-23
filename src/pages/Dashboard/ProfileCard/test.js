import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfileCard from '.';

describe('<ProfileCard />', () => {
    it('should render a title', () => {
        const { getByText } = render(<ProfileCard />);
        expect(getByText('Nick Bansal')).toBeInTheDocument();
        expect(getByText('Junior Web Developer')).toBeInTheDocument();
    });
    it('should apply new styles depending on where the mouse is placed', () => {
        const { getByLabelText } = render(<ProfileCard />);

        expect(getByLabelText('Profile picture')).toHaveStyleRule('opacity', '1');
        expect(getByLabelText('Links icons')).toHaveStyleRule('opacity', '0');

        const profileContainer = getByLabelText('Profile picture and links');

        fireEvent.mouseEnter(profileContainer);

        expect(getByLabelText('Profile picture')).toHaveStyleRule('opacity', '0.8');
        expect(getByLabelText('Links icons')).toHaveStyleRule('opacity', '1');

        fireEvent.mouseLeave(profileContainer);

        expect(getByLabelText('Profile picture')).toHaveStyleRule('opacity', '1');
        expect(getByLabelText('Links icons')).toHaveStyleRule('opacity', '0');
    });
});
