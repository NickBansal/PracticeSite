import React, { useState } from 'react';
import styled from 'styled-components';

import Stage from './Tetris/Stage/index';
import Display from './Tetris/Display';
import StartButton from './Tetris/StartButton';

import { createStage, checkCollision } from './utils/gameHelpers';

import usePlayer from '../../../../../../utils/hooks/usePlayer';
import useStage from '../../../../../../utils/hooks/useStage';
import useInterval from '../../../../../../utils/hooks/useInterval';
import useGameStatus from '../../../../../../utils/hooks/useGameStatus';

const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	margin: 0 auto;

	aside {
		width: 100%;
		display: block;
	}
`;

const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
		rowsCleared
	);

	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const startGame = () => {
		setStage(createStage());
		setDropTime(1000);
		resetPlayer();
		setGameOver(false);
		setScore(0);
		setRows(0);
		setLevel(0);
	};

	const drop = () => {
		if (rows >= (level + 1) * 10) {
			setLevel(prev => prev + 1);
			setDropTime(1000 / (level + 1) + 200);
		}
		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game Over
			if (player.pos.y < 1) {
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				setDropTime(1000 / (level + 1) + 200);
			}
		}
	};

	const dropPlayer = () => {
		setDropTime(null);
		drop();
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			} else if (keyCode === 38) {
				playerRotate(stage, 1);
			}
		}
	};

	useInterval(() => {
		drop();
	}, dropTime);

	return (
		<StyledTetris
			role="button"
			tabIndex={0}
			onKeyDown={e => move(e)}
			onKeyUp={keyUp}
		>
			<Stage stage={stage} />
			<aside>
				{gameOver ? (
					<Display gameOver={gameOver} text="Game over" />
				) : (
					<div>
						<Display text={`Score: ${score}`} />
						<Display text={`Rows: ${rows}`} />
						<Display text={`Level: ${level}`} />
					</div>
				)}
				<StartButton callBack={startGame} />
			</aside>
		</StyledTetris>
	);
};

export default Tetris;
