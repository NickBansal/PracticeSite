import React from 'react';
import styled from 'styled-components';
import { spacing, colors } from '../../../../../assets/globalStyles/constants';

const Container = styled.div`
	position: absolute;
	z-index: 200;
	height: 67%;
	width: 60%;
	background: ${colors.cardOverlay};
	text-align: center;
	right: 10px;
	padding: ${spacing.s1};
	animation: slidein 0.3s 1 linear;

	@keyframes slidein {
		from {
			width: 0;
		}
		to {
			width: 60%;
		}
	}
`;

const ChatRoom = styled.p`
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
`;

const RoomName = styled.div`
	font-size: 24px;
	margin: 0;
	overflow-x: hidden;
	line-height: 19px;
`;

const ExtraInfo = () => (
	<Container>
		<ChatRoom>Chat room:</ChatRoom>
		<RoomName>Blah</RoomName>
	</Container>
);

export default ExtraInfo;
