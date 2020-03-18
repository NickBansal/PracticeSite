import React from 'react';
import { node, func } from 'prop-types';
import styled from 'styled-components';
import { transitionSpeed } from '../../utils/globalStyles/constants';

const DashboardBtns = styled.button`
	width: 90%;
	height: 30px;
	border-radius: 5px;
	background: none;
	font-size: 16px;
	position: absolute;
	left: 50%;
	bottom: 5px;
	border: 2px solid #00000040;
	color: grey
	transform: translate(-50%, -50%);

    &:hover {
		background: grey;
		color: white;
		cursor: pointer;
	}

	transition: color ${transitionSpeed}, background-color ${transitionSpeed};
`;

const CardButton = ({ children, onClick, props }) => (
	<DashboardBtns type="button" onClick={onClick} {...props}>
		{children}
	</DashboardBtns>
);

CardButton.propTypes = {
	children: node.isRequired,
	onClick: func.isRequired
};

export default CardButton;
