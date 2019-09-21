import React from 'react';
import { node, func } from 'prop-types';
import styled from 'styled-components';

const DashboardBtns = styled.button`
    width: 90%;
    height: 30px;
    border-radius: 5px;
    background: none;
    font-size: 16px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: 2px solid #00000040;
    color: grey

    &:hover {
        background: grey;
        color: white;
        cursor: pointer;
    }

    transition: 0.3s
`;

const Button = ({ children, handleClick, props }) => (
    <DashboardBtns
        type="button"
        onClick={handleClick}
        {...props}
    >{children}
    </DashboardBtns>
);

Button.propTypes = {
    children: node.isRequired,
    onClick: func,
};

Button.defaultProps = {
    onClick: () => { },
};

export default Button;
