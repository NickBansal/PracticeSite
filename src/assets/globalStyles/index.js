import styled, { createGlobalStyle } from 'styled-components';
import { spacing } from './constants/index';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    filter: grayscale(0.3);
    max-width: 1500px;
    margin: 0 auto;
  }
`;

export const HR = styled.hr`
  height: 1px;
  background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0, 0, 0, 0.8),rgba(0,0,0,0));
  width: 100%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin: ${spacing.s1} auto;  
`;
