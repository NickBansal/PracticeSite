import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import flags from '../../../../assets/flags';
import BlurImageLoader from '../../../../components/BlurImageLoader';
import { spacing } from '../../../../assets/globalStyles/constants';

const ModalStyled = styled.div`
    height: ${({ show }) => (show ? '290px' : '0px')};
    position: absolute;
    background: #b2bbc5;
    z-index: 100;
    bottom: 74px;
    width: 90%;
    overflow: hidden;
    text-align: center;
    transition: height 0.5s ease-in;
`;

const Image = styled(BlurImageLoader)`
    margin: ${spacing.s2} ${spacing.s2} 0;
    border-radius: 16px;
    border: 3px solid grey;

    &:hover {
        cursor: pointer;
        filter: filter: grayscale(0.5);
    }

    transition: 0.3s
`;

const NewsSelect = ({ show, handleClick }) => (
    <ModalStyled show={show} aria-label="Country news select">
        {flags.map((flag) => {
            const country = JSON.stringify(flag).split('media/')[1].split('.')[0];
            return (
                <Image
                    onClick={() => handleClick(false)}
                    key={flag}
                    width="110px"
                    height="100px"
                    image={flag}
                    alt={`${country} flag`}
                    placeholder={`${country} flag`}
                />
            );
        })}
    </ModalStyled>
);

NewsSelect.propTypes = {
    show: bool.isRequired,
};

export default NewsSelect;
