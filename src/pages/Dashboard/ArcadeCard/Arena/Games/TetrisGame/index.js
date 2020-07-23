import React, { useState } from 'react';
import styled from 'styled-components';

import Stage from './Tetris/Stage/index';
import Display from './Tetris/Display';
import StartButton from './Tetris/StartButton';

import { createStage, checkCollision } from './utils/gameHelpers';

import usePlayer from '../../../../../../utils/hooks/usePlayer';
import useStage from '../../../../../../utils/hooks/useStage';

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
	const [stage, setStage] = useStage(player, resetPlayer);

	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const startGame = () => {
		setStage(createStage());
		resetPlayer();
		setGameOver(false);
	};

	const drop = () => {
		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game Over
			if (player.pos.y < 1) {
				console.log('GAME OVER!!!');
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const dropPlayer = () => {
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

	return (
		<StyledTetris role="button" tabIndex={0} onKeyDown={e => move(e)}>
			<Stage stage={stage} />
			<aside>
				{gameOver ? (
					<Display gameOver={gameOver} text="Game over" />
				) : (
					<div>
						<Display text="Score" />
						<Display text="Rows" />
						<Display text="Level" />
					</div>
				)}
				<StartButton callBack={startGame} />
			</aside>
		</StyledTetris>
	);
};

export default Tetris;
