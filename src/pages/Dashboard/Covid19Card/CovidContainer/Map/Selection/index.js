import React from 'react';
import styled from 'styled-components';

import { breakPoints } from '../../../../../../utils/globalStyles/constants';

import MAP_CATEGORIES from '../../../../../../constants/map_categories';

const Title = styled.h2`
	position: absolute;
	top: 60px;
	z-index: 500;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 70px;
	}
`;

const Selections = styled.div`
	position: absolute;
	top: 65px;
	left: 10px;
	z-index: 400;

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 75px;
	}
`;

const Button = styled.button`
	display: block;
	width: 70px;
	background: ${({ selected }) => (selected ? 'black' : 'none')};
	color: ${({ selected }) => (selected ? 'white' : 'black')};
	font-size: 15px;
	cursor: pointer;
	border-top: none;
	outline: none;

	&:hover {
		background: black;
		color: white;
	}

	&:first-child {
		border-top: 1px solid black;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:last-child {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;

const MapSelection = ({ title, setCategory }) => (
	<>
		<Selections>
			{Object.keys(MAP_CATEGORIES).map(cat => (
				<Button
					onClick={() => setCategory(cat)}
					selected={cat === title}
					key={cat}
				>
					{cat[0].toUpperCase() + cat.slice(1)}
				</Button>
			))}
		</Selections>
		<Title>
			<u>Total {title}</u>
		</Title>
	</>
);

export default MapSelection;
