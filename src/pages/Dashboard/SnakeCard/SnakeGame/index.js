import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize
} from '../../../../utils/globalStyles/constants';
import { initialState, rowsLength } from './utils';
import createEmptyGame from '../../../../utils/functions/createEmptyGame';
import reducer from './reducer';
import useInterval from '../../../../utils/hooks/useInterval';
import Cells from './Cells';
import GameOver from './GameOver';
import Score from './Score';

const Column = styled.div`
	display: inline-block;
`;

const Container = styled.div`
	width: fit-content;
	min-width: 375px;
	margin: 0 auto;
	height: 375px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 600px;
	}
`;

const Pause = styled.div`
	color: white;
	top: 75%;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	font-size: ${fontSize.small};
	width: 600px;
	text-align: center;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: ${fontSize.title};
	}
`;

const Begin = styled(Pause)`
	top: 30%;
`;

const SnakeGame = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const {
		grid,
		snake,
		food,
		direction,
		score,
		gameOver,
		gameStart,
		speed
	} = state;

	const updateBoard = () => {
		const newGrid = createEmptyGame(rowsLength, rowsLength);
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;
		dispatch({ type: 'grid', payload: newGrid });
	};
	console.log(speed);
	const restartGame = () => dispatch({ type: 'restart' });

	useEffect(() => {
		updateBoard();
		// eslint-disable-next-line
	}, [gameOver]);

	const changeDirectionWithKeys = ({ key }) => {
		switch (key) {
			case 'ArrowUp':
				dispatch({ type: 'direction', payload: 'up' });
				break;
			case 'ArrowDown':
				dispatch({ type: 'direction', payload: 'down' });
				break;
			case 'ArrowRight':
				dispatch({ type: 'direction', payload: 'right' });
				break;
			case 'ArrowLeft':
				dispatch({ type: 'direction', payload: 'left' });
				break;
			default:
				dispatch({ type: 'direction', payload: 'pause' });
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', changeDirectionWithKeys, false);
	}, []);

	useInterval(
		() => dispatch({ type: 'heartbeat' }),
		direction !== 'pause' && !gameOver ? speed : null
	);
	return (
		<>
			<Container>
				{grid.map((col, i) => (
					<Column key={String(i)}>
						{col.map((row, j) => (
							<Cells
								key={String(j)}
								snake={row === 1}
								food={row === 2}
							/>
						))}
					</Column>
				))}
			</Container>
			<Score score={score} />
			{!gameStart && (
				<Begin>
					<h2>Welcome</h2>
					Please press any arrow key to begin the game
				</Begin>
			)}
			{direction === 'pause' && gameStart && !gameOver && (
				<Pause>
					<h3 style={{ margin: 0 }}>Game paused</h3>
					Please press any arrow key to continue
				</Pause>
			)}
			{gameOver && <GameOver score={score} restartGame={restartGame} />}
		</>
	);
};

export default SnakeGame;
