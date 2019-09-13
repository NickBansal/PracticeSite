import React from 'react';
import { render } from '@testing-library/react';
import Card from '.';

describe('<Card />', () => {
  it('should animate with the correct fadein times', () => {
    const fadeInTime = '0.5s';
    const { getByLabelText } = render(<Card fadeIn={fadeInTime}>Hello</Card>);
    expect(getByLabelText('Display card')).toHaveStyleRule('animation', `${fadeInTime} linear fade`);
  });
  it('should render the correct children', () => {
    const fadeInTime = '0.5s';
    const { getByText } = render(<Card fadeIn={fadeInTime}>Hello</Card>);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
