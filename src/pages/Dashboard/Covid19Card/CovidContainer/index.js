import React, { useState } from 'react';
import styled from 'styled-components';

import CovidHeader from './CovidHeader';

import Map from './Map';

const Container = styled.div`
	width: 100%;
	height: 600px;
`;

const CovidContainer = () => {
	const [tab, setTab] = useState('Map');
	return (
		<Container>
			<CovidHeader setTab={setTab} tab={tab} />
			{tab === 'Map' && <Map />}
		</Container>
	);
};

export default CovidContainer;
