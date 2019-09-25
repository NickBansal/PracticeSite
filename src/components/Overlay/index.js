import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: #000000c2;
    z-index: 400;
    position: fixed;
    top: 0;
    left: 0;
`;

const Close = styled.div`
    width: 60px;
    height: auto;
    font-size: 40px;
    text-align: center;
    right: 0;
    position: absolute;
    color: #ffffff61;
    border: #ffffff61 solid 2px;
    border-radius: 50%;
    margin: 16px;
    
    &:hover {
        cursor: pointer;
        color: white;
        border: white solid 2px;
    }

    transition: 0.3s
`;

const Overlay = ({ showOverlay, handleClick, children }) => (
    <CSSTransition
        in={showOverlay}
        timeout={500}
        classNames="alert"
        unmountOnExit
    >
        <Background>
            <Close onClick={() => handleClick(false)}>X</Close>
            {children}
        </Background>
    </CSSTransition>
);


export default Overlay;