import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../../../../utils/globalStyles/constants';

const Button = styled.button`
	box-sizing: border-box;
	font-size: 18px;
	margin: 20px 0;
	padding: 10px;
	border-radius: 20px;
	border: none;
	color: ${colors.pink};
	background: black;
	outline: none;
	width: 90%;
	cursor: pointer;
	border: 5px solid ${colors.pink};

	&:hover {
		background: ${colors.pink};
		color: black;
	}
`;

const StartButton = ({ callBack }) => (
	<Button onClick={callBack}>Start game</Button>
);

export default StartButton;
