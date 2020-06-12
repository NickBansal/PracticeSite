import React, { useState } from 'react';
import styled from 'styled-components';

import {
	colors,
	transitionSpeed
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
`;

const Icon = styled.i`
	color: ${colors.darkYellow};
	transform: rotate(${({ dropdown }) => (dropdown ? '0' : '180deg')});
	transition: transform ${transitionSpeed};
	cursor: pointer;
`;

const Graph = ({ results }) => {
	const [country, setCountry] = useState(undefined);
	const [dropdown, setDropdown] = useState(false);

	return (
		<Container>
			<Dropdown>
				<Header>
					<p>{country || 'Please select a country'}</p>
					<Icon
						className="i-link fas fa-chevron-up fa-2x"
						onClick={() => setDropdown(!dropdown)}
						dropdown={dropdown}
					/>
				</Header>
				{/* <ul className="dd-list">
					<li className="dd-list-item" />
					<li className="dd-list-item" />
					<li className="dd-list-item" />
				</ul> */}
			</Dropdown>
		</Container>
	);
};

export default Graph;
