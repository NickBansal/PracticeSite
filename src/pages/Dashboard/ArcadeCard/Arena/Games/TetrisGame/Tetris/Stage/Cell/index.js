import React from 'react';
import styled from 'styled-components';

import { TETROMINOS } from '../../../utils/tetrominos';

const StyledCell = styled.div`
	width: auto;
	background: rgba(${props => props.color}, 0.7);
	border: ${props => (props.type === 0 ? 'none' : '4px solid')};
	border-bottom-color: rgba(${props => props.color}, 0.1);
	border-right-color: rgba(${props => props.color}, 1);
	border-top-color: rgba(${props => props.color}, 1);
	border-left-color: rgba(${props => props.color}, 0.3);
`;

const Cell = ({ type }) => (
	<StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
