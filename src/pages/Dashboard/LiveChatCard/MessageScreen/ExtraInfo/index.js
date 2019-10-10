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
	height: 282px;
	width: 50%;
	background: ${colors.cardOverlay};
	text-align: center;
	bottom: 72px;
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
	line-height: 19px;
`;

const Icon = styled.i`
	color: white;
	margin: 0 ${spacing.s1};
`;

const Table = styled.table`
	margin: ${spacing.s2} 0;
`;

const Description = styled.p`
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	font-size: ${fontSize.small};

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const ExtraInfo = ({ showInfo }) => (
	<Container>
		<ChatRoom>Chat room:</ChatRoom>
		<RoomName>Blah</RoomName>
		<HR />
		<Table>
			<tbody>
				<tr onClick={() => showInfo(false)}>
					<td>
						<Icon className="i-link fas fa-globe-europe fa-2x" />
					</td>
					<td>
						<Description>Share location</Description>
					</td>
				</tr>
				<tr onClick={() => showInfo(false)}>
					<td>
						<Icon className="i-link fas fa-cloud-sun-rain fa-2x" />
					</td>
					<td>
						<Description>Share weather</Description>
					</td>
				</tr>
			</tbody>
		</Table>
	</Container>
);

export default ExtraInfo;
