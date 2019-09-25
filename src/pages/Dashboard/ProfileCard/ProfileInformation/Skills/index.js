import React from 'react';
import styled from 'styled-components';
import {
	spacing,
	breakPoints
} from '../../../../../assets/globalStyles/constants';

const Icon = styled.i`
	color: #ff3300;
	margin: ${spacing.s1};

	&:nth-child(1),
	&:nth-child(5) {
		font-size: 40px;
	}
	&:nth-child(2),
	&:nth-child(4) {
		font-size: 60px;
	}
	&:nth-child(3) {
		font-size: 80px;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		&:nth-child(1),
		&:nth-child(5) {
			font-size: 60px;
		}
		&:nth-child(2),
		&:nth-child(4) {
			font-size: 80px;
		}
		&:nth-child(3) {
			font-size: 105px;
		}
	}
`;

const SkillsContainer = styled.div`
	position: absolute;
	width: 100%;
	text-align: center;
	top: 66%;

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 56%;
	}
`;

const Skills = () => (
	<SkillsContainer>
		<Icon className="i-link fab fa-css3" />
		<Icon className="i-link fab fa-react" />
		<Icon className="i-link fab fa-js-square" />
		<Icon className="i-link fab fa-node" />
		<Icon className="i-link fab fa-python" />
	</SkillsContainer>
);

export default Skills;
