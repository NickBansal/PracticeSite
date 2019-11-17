import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import useInterval from '../../../../utils/hooks/useInterval';
// import pint from '../../../../assets/snake/pint.svg';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? colors.green : 'black')};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 40px;
		height: 40px;
	}
`;

const Container = styled.div`
	width: fit-content;
	margin: 0 auto;
	height: 375px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 600px;
	}
`;

const rowsLength = 15;

export const createEmptyGameBoard = rows => {
	const arr = [];
	for (let i = 0; i < rows; i++) {
		arr[i] = Array(rows).fill(0);
	}
	return arr;
};

const SnakeGame = () => {
	const [grid, setGrid] = useState(createEmptyGameBoard(rowsLength));

	// document.addEventListener('keydown', changeDirectionWithKeys, false);

	// useInterval(moveSnake, 500);

	return (
		<Container id="snakeGame">
			{grid.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Row key={String(j)} />
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;
