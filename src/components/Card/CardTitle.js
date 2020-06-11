import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import HR from '../HR';
import { fontSize } from '../../utils/globalStyles/constants/index';

const Title = styled.h1`
	font-size: ${fontSize.title};
	margin: 0;
	letter-spacing: -1px;
`;

const CardTitle = ({ children }) => (
	<>
		<Title>{children}</Title>
		<HR />
	</>
);

CardTitle.propTypes = {
	children: node.isRequired
};

export default CardTitle;
