import React from 'react';
import styled from 'styled-components';
import {
	spacing,
	colors,
	fontSize
} from '../../../../../assets/globalStyles/constants';
import { HR } from '../../../../../assets/globalStyles';

const Container = styled.div`
	position: absolute;
	z-index: 200;
	height: 67%;
	width: 60%;
	background: ${colors.cardOverlay};
	text-align: center;
	right: 10px;
	overflow: hidden;
	padding: ${spacing.s1};
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
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

const RoomName = styled.p`
	font-size: ${fontSize.title};
	margin: 0;
	overflow-x: hidden;
	line-height: 19px;
`;

const Icon = styled.i`
	color: white;
	margin-right: ${spacing.s1};
`;

const Table = styled.table`
	margin: ${spacing.s2} ${spacing.s1};
`;

const Description = styled.p`
	margin: 0;
	overflow: hidden;
	white-space: nowrap;

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const ExtraInfo = () => (
	<Container>
		<ChatRoom>Chat room:</ChatRoom>
		<RoomName>Blah</RoomName>
		<HR />
		<Table>
			<tr>
				<td>
					<Icon className="i-link fas fa-globe-europe fa-2x" />
				</td>
				<td>
					<Description>Share location</Description>
				</td>
			</tr>
			<tr>
				<td>
					<Icon className="i-link fas fa-cloud-sun-rain fa-2x" />
				</td>
				<td>
					<Description>Share weather</Description>
				</td>
			</tr>
		</Table>
	</Container>
);

export default ExtraInfo;
