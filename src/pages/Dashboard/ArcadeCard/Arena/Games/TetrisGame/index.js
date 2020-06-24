import React, { useState } from 'react';
import styled from 'styled-components';

import Stage from './Tetris/Stage/index';
import Display from './Tetris/Display';
import StartButton from './Tetris/StartButton';

import { createStage } from './utils/gameHelpers';

import { usePlayer } from '../../../../../../utils/hooks/usePlayer';
import { useStage } from '../../../../../../utils/hooks/useStage';

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

	const [player, updatePlayerPos, resetPlayer] = usePlayer();
	const [stage, setStage] = useStage(player);

	const movePlayer = direction => {
		updatePlayerPos({ x: direction, y: 0, collided: false });
	};

	const startGame = () => {
		setStage(createStage());
		resetPlayer();
	};

	const drop = () => {
		updatePlayerPos({ x: 0, y: 1, collided: false });
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
			}
		}
	};

	return (
		<div role="button" tabIndex={0} onKeyDown={e => move(e)}>
			<StyledTetris>
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
					<StartButton onClick={startGame} />
				</aside>
			</StyledTetris>
		</div>
	);
};

export default Tetris;
