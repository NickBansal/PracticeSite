import React from 'react';
import styled from 'styled-components';
import pints from '../../../../../assets/snake/pint.svg';
import {
	colors,
	breakPoints
} from '../../../../../utils/globalStyles/constants';

const Tile = styled.div`
	width: ${({ snake }) => (snake ? '23.03px' : '25px')};
	height: ${({ snake }) => (snake ? '23.03px' : '25px')};
	background: ${({ snake }) => (snake ? colors.green : 'black')};
	background-image: ${({ food }) => (food ? `url(${pints})` : 'none')};
	border: ${({ snake }) => (snake ? '1px solid black' : 'none')};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: ${({ snake }) => (snake ? '38.03px' : '40px')};
		height: ${({ snake }) => (snake ? '38.03px' : '40px')};
	}
`;

const Cells = ({ snake, food }) => {
	let testId;
	if (snake) {
		testId = 'snake';
	} else if (food) {
		testId = 'food';
	} else {
		testId = 'emptyCell';
	}
	return <Tile snake={snake} food={food} data-testid={testId} />;
};

export default Cells;
