import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(${props => props.height}, 28px);
	grid-template-columns: repeat(${props => props.width}, 28px);
	grid-gap: 1px;
	border: 5.5px solid #111;
	width: 100%;
	background: #111;
`;

const Stage = ({ stage }) => (
	<StyledStage width={stage[0].length} height={stage.length}>
		{stage.map(row =>
			row.map((cell, x) => <Cell key={String(x)} type={cell[0]} />)
		)}
	</StyledStage>
);

export default Stage;
