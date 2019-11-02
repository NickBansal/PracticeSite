import React from 'react';
import styled from 'styled-components';
import colorScheme from '../colorScheme';

const Container = styled.div`
	height: 100%;
	width: 17%;
`;

const Instrument = styled.div`
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ffffff66;
	color: white;
	font-size: 1.1rem;
	background: #000000a8;

	&:nth-child(1) {
		background: ${colorScheme[0]};
	}
	&:nth-child(2) {
		background: ${colorScheme[1]};
	}
	&:nth-child(3) {
		background: ${colorScheme[2]};
	}
	&:nth-child(4) {
		background: ${colorScheme[3]};
	}
	&:nth-child(5) {
		background: ${colorScheme[4]};
	}
	&:nth-child(6) {
		background: ${colorScheme[5]};
	}
	&:nth-child(7) {
		background: ${colorScheme[6]};
	}
	&:nth-child(8) {
		background: ${colorScheme[7]};
	}
`;

const Labels = () => (
	<Container>
		<Instrument>Maraca</Instrument>
		<Instrument>Conga</Instrument>
		<Instrument>Cowbell</Instrument>
		<Instrument>Clap</Instrument>
		<Instrument>Open</Instrument>
		<Instrument>Closed</Instrument>
		<Instrument>Snare</Instrument>
		<Instrument>Kick</Instrument>
	</Container>
);

export default Labels;
