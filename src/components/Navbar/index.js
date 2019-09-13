import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const StyledNavbar = styled.div`
    width: 100%;
    height: 50px;
    background: none;
    text-align: right;
`;

const Navbar = () => (
  <StyledNavbar><Hamburger /></StyledNavbar>
);

export default Navbar;
