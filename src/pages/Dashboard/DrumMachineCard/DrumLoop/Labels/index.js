import React from 'react';
import styled from 'styled-components';

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
`;

const Labels = () => (
	<Container>
		<Instrument>Synth2</Instrument>
		<Instrument>Synth1</Instrument>
		<Instrument>Crash</Instrument>
		<Instrument>Hihat closed</Instrument>
		<Instrument>HiHat open</Instrument>
		<Instrument>Clap</Instrument>
		<Instrument>Snare</Instrument>
		<Instrument>Kick</Instrument>
	</Container>
);

export default Labels;
