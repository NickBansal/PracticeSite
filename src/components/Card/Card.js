import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';
import { spacing, breakPoints } from '../../utils/globalStyles/constants/index';

const StyledCard = styled.div`
	height: 400px;
	width: 300px;
	background: white;
	border: 3px solid #00000040;
	margin: ${spacing.s3} 0;
	border-radius: ${spacing.s2};
	display: inline-block;
	padding: ${spacing.s2};
	animation: ${({ fadeIn }) => fadeIn} linear fade 1;
	position: relative;
	@keyframes fade {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (min-width: ${breakPoints.smallMobile}) {
		margin: ${spacing.s3};
	}
`;

const Card = ({ fadeIn, children, ...props }) => (
	<StyledCard fadeIn={fadeIn} aria-label="Display card" {...props}>
		{children}
	</StyledCard>
);

Card.propTypes = {
	fadeIn: string.isRequired,
	children: node.isRequired
};

export default Card;
