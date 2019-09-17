import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 10px;
    right: 16px;
    &:hover {
        cursor: pointer;
    }

    div {
        height: 7px;
        width: 60px;
        margin: 12px;
        background: #0000008a;
        border-radius: 3px;
        position: absolute;
        right: 20px;
    }

    div:first-child {
        background: #0000008a;
        transform: rotate(${({ open }) => (open ? '45deg' : '0')});
        top: ${({ open }) => (!open ? '10px' : '25px')};
        transition: 0.3s
    }

    div:nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        top: 25px;
        transition: 0.3s
    }

    div:last-child {
        background: #0000008a;
        transform: rotate(${({ open }) => (open ? '-45deg' : '0')});
        top: ${({ open }) => (open ? '25px' : '40px')};
        transition: 0.3s
    }
`;

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container onClick={() => setOpen(!open)} open={open}>
            <div />
            <div />
            <div />
        </Container>
    );
};

export default Hamburger;
