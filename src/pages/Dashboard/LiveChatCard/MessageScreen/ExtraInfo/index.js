import React from 'react';
import styled from 'styled-components';
import {
	spacing,
	colors,
	fontSize,
	transitionSpeed
} from '../../../../../assets/globalStyles/constants';
import { HR } from '../../../../../assets/globalStyles';
import socket from '../../../../../utils/socketIO';

const Container = styled.div`
	position: absolute;
	z-index: 200;
	height: 232px;
	width: 60%;
	background-image: linear-gradient(${colors.cardOverlay}, white);
	text-align: center;
	bottom: 122px;
	right: 10px;
	overflow: hidden;
	padding: ${spacing.s1};
	animation: slidein ${transitionSpeed}; 1 linear;

	@keyframes slidein {
		from {
			width: 0;
		}
		to {
			width: 50%;
		}
	}
`;

const ChatRoom = styled.p`
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
`;

const RoomName = styled.p`
	font-size: ${fontSize.title};
	margin: 0;
	overflow-x: hidden;
	line-height: 25px;
`;

const Icon = styled.i`
	color: white;
	margin: 0 ${spacing.s1};
`;

const Table = styled.table`
	margin: ${spacing.s2} 0;
`;

const Row = styled.tr`
	height: 50px;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const Description = styled.p`
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	font-size: ${fontSize.small};
`;

const ExtraInfo = ({ showInfo, userDetails: { name, room } }) => (
	<Container>
		<ChatRoom>Chat room:</ChatRoom>
		<RoomName>{room}</RoomName>
		<HR />
		<Table>
			<tbody>
				<Row
					onClick={() => {
						socket.emit('sendLocation', {
							location: 'hello',
							name
						});
						showInfo(false);
					}}
				>
					<td>
						<Icon className="i-link fas fa-globe-europe fa-2x" />
					</td>
					<td>
						<Description>Share location</Description>
					</td>
				</Row>
				<Row onClick={() => showInfo(false)}>
					<td>
						<Icon className="i-link fas fa-cloud-sun-rain fa-2x" />
					</td>
					<td>
						<Description>Share weather</Description>
					</td>
				</Row>
			</tbody>
		</Table>
	</Container>
);

export default ExtraInfo;
