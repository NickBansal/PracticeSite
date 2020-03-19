import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 400px;
	border: 1px solid white;
	animation: accordion 1s 1;
	overflow: hidden;

	@keyframes accordion {
		0% {
			height: 0;
		}
		100% {
			height: 400px;
		}
	}
`;

const Timeline = styled.div`
	position: relative;
	max-width: 1200px;
	margin: 0 auto;

	::after {
		content: '';
		position: absolute;
		height: 6px;
		background-color: white;
		top: 35px;
		right: 0px;
		left: 2px;
		margin-left: -3px;
	}
`;

const Content = styled.div`
	padding: 20px 30px;
	background-color: white;
	position: relative;
	border-radius: 6px;
	height: 270px;
	overflow: scroll;
`;

const ContentContainer = styled.div`
	padding: 10px 40px;
	position: relative;
	background-color: inherit;
	width: 50%;
	color: black;
	margin-top: 60px;

	::before {
		content: ' ';
		height: 0px;
		position: absolute;
		top: -9px;
		width: 0;
		z-index: 1;
		right: 50.6%;
		border: medium solid white;
		border-width: 10px 0 10px 5px;
	}

	::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		right: 47%;
		background-color: white;
		border: 4px solid #ff9f55;
		top: -39px;
		border-radius: 50%;
		z-index: 1;
	}
`;

const Events = () => (
	<Container>
		<Timeline />
		<ContentContainer>
			<Content>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text
				ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</Content>
		</ContentContainer>
	</Container>
);

export default Events;
