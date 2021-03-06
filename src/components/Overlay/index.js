import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import {
	breakPoints,
	transitionSpeed
} from '../../utils/globalStyles/constants';

const Background = styled.div`
	width: 100%;
	height: 100vh;
	background: #000000c2;
	z-index: 400;
	position: fixed;
	top: 0;
	left: 0;
	overflow: scroll;
`;

const TransitionEffects = styled.div`
	.transition-enter & {
		opacity: 0;
		transform: scale(0.3), translate(-50%, -50%);
	}
	.transition-enter-active & {
		opacity: 1;
		transform: translateX(0), translate(-50%, -50%);
		transition: opacity 500ms, transform 500ms;
	}
	.transition-exit & {
		opacity: 1;
	}
	.transition-exit-active & {
		opacity: 0;
		transform: scale(0.3), translate(-50%, -50%);
		transition: opacity 500ms, transform 500ms;
	}
`;

const Close = styled(TransitionEffects)`
	width: 40px;
	height: auto;
	font-size: 27px;
	text-align: center;
	right: 0;
	position: absolute;
	color: #ffffff61;
	border: #ffffff61 solid 2px;
	border-radius: 50%;
	margin: 16px;

	&:hover {
		cursor: pointer;
		color: white;
		border: white solid 2px;
	}

	transition: color ${transitionSpeed}, border ${transitionSpeed};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 60px;
		font-size: 40px;
	}
`;

const Information = styled(TransitionEffects)`
	position: absolute;
	z-index: 500;
	top: 90px;
	left: 50%;
	border-radius: 8px;
	transform: translate(-50%, 0);
	width: 95%;
	text-align: center;

	@media (min-width: ${breakPoints.mobile}) {
		width: 90%;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 120px;
		width: 700px;
	}
`;

const Overlay = ({ showOverlay, handleClick, children }) => (
	<CSSTransition
		in={showOverlay}
		timeout={500}
		classNames="transition"
		unmountOnExit
		aria-label="Overlay modal"
	>
		<Background>
			<Close onClick={() => handleClick(false)}>X</Close>
			<Information>{children}</Information>
		</Background>
	</CSSTransition>
);

export default Overlay;
