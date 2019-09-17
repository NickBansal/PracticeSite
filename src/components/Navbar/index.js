import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const StyledNavbar = styled.div`
    width: 100%;
    height: 50px;
    text-align: right;
    position: sticky;
    top: 0px;
`;

const Navbar = () => (
    <StyledNavbar>
        <Hamburger />
    </StyledNavbar>
);

export default Navbar;
