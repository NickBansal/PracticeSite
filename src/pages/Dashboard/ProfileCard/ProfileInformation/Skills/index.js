import React from 'react';
import styled from 'styled-components';
import {
	spacing,
	breakPoints,
	colors
} from '../../../../../utils/globalStyles/constants';

const Icon = styled.i`
	color: ${colors.orange};
	margin: ${spacing.s1};

	&:nth-child(1),
	&:nth-child(5) {
		font-size: 30px;
	}
	&:nth-child(2),
	&:nth-child(4) {
		font-size: 40px;
	}
	&:nth-child(3) {
		font-size: 50px;
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

const SkillsArray = ['css3', 'react', 'js-square', 'node', 'python'];

const Skills = () => (
	<SkillsContainer>
		{SkillsArray.map(skill => (
			<Icon
				key={skill}
				className={`i-link fab fa-${skill}`}
				aria-label="programming icons"
			/>
		))}
	</SkillsContainer>
);

export default Skills;
