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
	const [results, setResults] = useState([]);
	const [error, setError] = useState(false);
	const [countryData] = useState({});
	const [selection, setSelection] = useState('UK');

	useEffect(() => {
		axios
			.get('https://corona.lmao.ninja/v2/countries')
			.then(({ data }) => {
				setResults(data);

				data.forEach(info => {
					countryData[info.country] = info;
				});
			})
			.catch(err => setError(err));
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			{error && <h1>Error</h1>}
			<CovidHeader setTab={setTab} tab={tab} />
			{tab === 'Map' ? (
				<Map results={results} />
			) : (
				<Graph
					countryData={countryData}
					selection={selection}
					setSelection={setSelection}
				/>
			)}
		</Container>
	);
};

export default CovidContainer;
