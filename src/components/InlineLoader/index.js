import React from 'react';
import { bool, string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../assets/globalStyles/constants';

const Rotate = keyframes`
 {
  100% {
    transform: rotate(360deg);
  }
}
`;

const Dash = keyframes`
 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
`;

const Circular = styled.svg`
	animation: ${Rotate} 2s linear infinite;
	transform-origin: center center;
	width: ${props => props.size};
	height: ${props => props.size};
	vertical-align: middle;
`;
Circular.displayName = 'Circular';

const Circle = styled.circle`
	stroke: ${props => (props.standalone ? colors.red : 'currentColor')};
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: ${Dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
	stroke-linecap: round;
`;
Circle.displayName = 'Circle';

const InlineLoader = ({ isLoading, standalone, size, ...rest }) => {
	if (!isLoading) {
		return null;
	}

	return (
		<Circular
			className="circular"
			viewBox="24 24 48 48"
			size={size}
			{...rest}
		>
			<Circle
				standalone={standalone}
				className="loading-path"
				cx="48"
				cy="48"
				r="20"
				fill="none"
				strokeWidth="6"
				strokeMiterlimit="10"
			/>
		</Circular>
	);
};

InlineLoader.displayName = 'InlineLoader';

InlineLoader.propTypes = {
	isLoading: bool.isRequired,
	standalone: bool,
	size: string
};

InlineLoader.defaultProps = {
	standalone: false,
	size: '16px'
};

export default InlineLoader;
