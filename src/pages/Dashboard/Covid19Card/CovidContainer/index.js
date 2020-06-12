import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CovidHeader from './CovidHeader';
import Map from './Map';
import Graph from './Graph';

const Container = styled.div`
	width: 100%;
	height: 600px;
`;

const CovidContainer = () => {
	const [tab, setTab] = useState('Map');
	const [latest, SetLatest] = useState([]);
	const [results, SetResults] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.all([
				axios.get('https://corona.lmao.ninja/v2/all'),
				axios.get('https://corona.lmao.ninja/v2/countries')
			])
			.then(res => {
				SetLatest(res[0].data);
				SetResults(res[1].data);
			})
			.catch(err => setError(err));
	}, []);

	return (
		<Container>
			{error && <h1>Error</h1>}
			<CovidHeader setTab={setTab} tab={tab} />
			{tab === 'Map' ? (
				<Map results={results} />
			) : (
				<Graph latest={latest} />
			)}
		</Container>
	);
};

export default CovidContainer;
