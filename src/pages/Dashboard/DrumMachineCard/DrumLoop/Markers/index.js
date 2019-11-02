import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 714px;
	height: 36px;
	position: absolute;
	bottom: 56px;
	display: flex;
	align-items: center;
`;

const Title = styled.div`
	width: 17%;
	border-right: 2px solid white;
	margin: 0;
	display: inline-block;
	color: white;
	text-align: center;
`;

const Numbers = styled.p`
	margin: 0;
	display: inline-block;
	color: white;
	width: 37px;
	text-align: center;
	transform: scale(${({ signal }) => (signal ? '1.3' : '1')});
`;

const Markers = ({ beat }) => (
	<Container>
		<Title>Marker</Title>
		{Array(16)
			.fill(null)
			.map((_, index) => (
				<Numbers key={String(index)} signal={beat === index}>
					{index + 1}
				</Numbers>
			))}
	</Container>
);

export default Markers;
