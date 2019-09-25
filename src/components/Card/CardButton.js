import React from 'react';
import { node, func } from 'prop-types';
import styled from 'styled-components';

const DashboardBtns = styled.button`
	width: 90%;
	height: 30px;
	border-radius: 5px;
	background: none;
	font-size: 16px;
	position: absolute;
	bottom: 20px;
	right: 20px;
	border: 2px solid #00000040;
	color: grey

    &:hover {
		background: grey;
		color: white;
		cursor: pointer;
	}

	transition: 0.3s;
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