import React from 'react';
import styled from 'styled-components';

import Stage from './Tetris/Stage/index';
import Display from './Tetris/Display';
import StartButton from './Tetris/StartButton';

import { createStage } from './utils/gameHelpers';

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
	return (
		<StyledTetris>
			<Stage stage={createStage()} />
			<aside>
				<div>
					<Display text="Score" />
					<Display text="Rows" />
					<Display text="Level" />
				</div>
				<StartButton />
			</aside>
		</StyledTetris>
	);
};

export default Tetris;
