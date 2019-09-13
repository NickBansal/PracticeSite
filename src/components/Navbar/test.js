import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar />', () => {
  it('should animate with the correct fadein times', () => {
    const container = render(<Navbar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
