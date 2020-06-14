import React, { useState } from 'react';
import styled from 'styled-components';

import {
	colors,
	transitionSpeed,
	breakPoints
} from '../../../../../utils/globalStyles/constants/index';

const Container = styled.div`
	color: white;
`;

const Dropdown = styled.div``;

const Header = styled.div`
	width: 50%;
	margin: 16px auto 0;
	height: 40px;
	border: 2px solid ${colors.darkYellow};
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

const Icon = styled.i`
	color: ${colors.darkYellow};
	transform: rotate(${({ dropdown }) => (dropdown ? '0' : '180deg')});
	transition: transform ${transitionSpeed};
	cursor: pointer;
`;

const Options = styled.ul`
	margin: 0 auto;
	padding: 0 20px;
	list-style: none;
	width: 50%;
	bottom: 62px;
	height: 280px;
	overflow: scroll;
	border: 2px solid yellow;
	border-top: none;
	position: absolute;
	z-index: 500;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (min-width: ${breakPoints.mobileMax}) {
		bottom: 52px;
	}
`;

const Option = styled.li`
	cursor: pointer;

	&:nth-child(odd) {
		background: #928e8e42;
		margin: 0 -20px;
	}

	&:hover {
		background: ${colors.yellow};
		margin: 0 -20px;
	}
`;

const Graph = ({ countryData }) => {
	const [selection, setSelection] = useState(undefined);
	const [dropdown, setDropdown] = useState(false);

	return (
		<Container>
			<Dropdown>
				<Header>
					<p>{selection || 'Please select a country'}</p>
					<Icon
						className="i-link fas fa-chevron-up fa-2x"
						onClick={() => setDropdown(!dropdown)}
						dropdown={dropdown}
					/>
				</Header>
				{dropdown && (
					<Options>
						{Object.keys(countryData).map(country => (
							<Option
								key={country}
								onClick={() => {
									setSelection(country);
									setDropdown(false);
								}}
							>
								{country}
							</Option>
						))}
					</Options>
				)}
			</Dropdown>
			<h1>{selection}</h1>
		</Container>
	);
};

export default Graph;
