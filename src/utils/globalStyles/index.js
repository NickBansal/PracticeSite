import styled, { createGlobalStyle } from 'styled-components';
import { spacing } from './constants/index';

export const GlobalStyle = createGlobalStyle`
  html {
    background: #1e3127;
  }
  body {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    filter: grayscale(0.5);
    margin: 0;
  }
`;

export const HR = styled.hr`
	height: 1px;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0.8),
		rgba(0, 0, 0, 0)
	);
	width: 100%;
	border-width: 0px;
	border-style: initial;
	border-color: initial;
	border-image: initial;
	margin: ${spacing.s1} auto;
`;

export const LiveText = styled.div`
    color: red
    animation: pulsate 2.0s infinite;
    width: 45px;
    display: inline-block;
    letter-spacing: -1px;

    @keyframes pulsate {
        0% { 
            opacity: 0.5;
            transform: scale(0.95)
        }
        50% { 
            opacity: 1.0;
            transform: scale(1)
        }
        100% { 
            opacity: 0.5;
            transform: scale(0.95)
        }
    }
`;
