import React from 'react';
import styled from 'styled-components';
import pints from '../../../../../assets/snake/pint.svg';
import {
	colors,
	breakPoints
} from '../../../../../utils/globalStyles/constants';

const Tile = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? colors.green : 'black')};
	background-image: ${({ food }) => (food ? `url(${pints})` : 'none')};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 40px;
		height: 40px;
	}
`;

const Cells = ({ snake, food }) => <Tile snake={snake} food={food} />;

export default Cells;
