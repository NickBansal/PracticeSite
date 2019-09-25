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

const Information = styled.div`
    position: absolute;
    z-index: 500;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 700px) {
        width: 650px;
    }

    .transition-enter & {
        opacity: 0;
        transform: scale(0.3), translate(-50%, -50%);
    }
    .transition-enter-active  &{
        opacity: 1;
        transform: translateX(0), translate(-50%, -50%);
        transition: opacity 500ms, transform 500ms;
    }
    .transition-exit & {
        opacity: 1;
    }
    .transition-exit-active & {
        opacity: 0;
        transform: scale(0.3), translate(-50%, -50%);
        transition: opacity 500ms, transform 500ms  
    }
`;

const Overlay = ({ showOverlay, handleClick, children }) => (
    <CSSTransition
        in={showOverlay}
        timeout={500}
        classNames="transition"
        unmountOnExit
        aria-label="Overlay modal"
    >
        <Background>
            <Close onClick={() => handleClick(false)}>X</Close>
            <Information>
                {children}
            </Information>
        </Background>
    </CSSTransition>
);


export default Overlay;
