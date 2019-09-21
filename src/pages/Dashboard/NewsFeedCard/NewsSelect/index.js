import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

const ModalStyled = styled.div`
    height: ${({ show }) => (show ? '290px' : '0px')};
    position: absolute;
    background: orange;
    z-index: 100;
    bottom: 74px;
    width: 90%;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    transition: height 0.5s ease-in;
`;

const NewsSelect = ({ show }) => <ModalStyled show={show} aria-label="Country news select" />;

NewsSelect.propTypes = {
    show: bool.isRequired,
};

export default NewsSelect;
