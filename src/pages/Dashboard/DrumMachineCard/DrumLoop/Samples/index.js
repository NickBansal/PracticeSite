import React from 'react';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import { colors } from '../../../../../utils/globalStyles/constants';

const url1 = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
const url2 = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';

const Sound = styled.div`
	min-width: 35px;
	height: 45px;
	border: 1px solid #ffffff66;
	background: ${({ playing }) => (!playing ? '#000000a8' : colors.yellow)};
	transform: scale(${({ hit }) => (hit ? '1.1' : null)});
	display: block;
	&:hover {
		cursor: pointer;
		border: 1px solid white;
		border-radius: 4px;
		background: #fec95278;
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.1s;
`;

const Samples = ({ sample, handleClick, hit, yCoord }) => {
	const url = yCoord <= 3 ? url1 : url2;
	return (
		<Sound hit={hit} playing={sample} onClick={handleClick}>
			{hit && <ReactAudioPlayer src={url} autoPlay />}
		</Sound>
	);
};

export default Samples;
