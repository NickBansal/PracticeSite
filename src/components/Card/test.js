import React from 'react';
import { render } from '@testing-library/react';
import Card from '.';
import 'jest-styled-components';

describe('<Card />', () => {
  it('should animate with the correct fadein times', () => {
    const fadeInTime = '0.5s';
    const { getByLabelText } = render(<Card fadeIn={fadeInTime} />);
    expect(getByLabelText('Display card')).toHaveStyleRule('animation', `${fadeInTime} linear fade`);
  });
});
