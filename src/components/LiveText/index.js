import React from 'react';
import styled from 'styled-components';

const Live = styled.div`
    color: red
    animation: pulsate 2.0s infinite;
    width: 45px;
    display: inline-block;

    @keyframes pulsate {
        0% { 
            opacity: 0.5;
            font-size: 1.45rem;
        }
        50% { 
            opacity: 1.0;
            font-size: 1.5rem;
        }
        100% { 
            opacity: 0.5;
            font-size: 1.45rem;
        }
    }
`;

const LiveText = () => <Live>Live</Live>;

export default LiveText;
