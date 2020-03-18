import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 400px;
	border: 1px solid white;
	animation: accordion 1s 1;

	@keyframes accordion {
		0% {
			height: 0;
		}
		100% {
			height: 400px;
		}
	}
`;

const Events = () => <Container>EVENTS</Container>;

export default Events;
