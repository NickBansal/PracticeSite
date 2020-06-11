import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import API_KEY from '../../../../keys/googleAPI';

const CountriesData = styled.div`
	color: red;
	background-color: '#fff';
	height: 25px;
	width: 35px;
`;

const Map = () => {
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

	const countriesLocation = results.map(data => {
		return (
			<CountriesData
				key={data.country}
				lat={data.countryInfo.lat}
				lng={data.countryInfo.long}
			>
				{data.cases}
			</CountriesData>
		);
	});

	return (
		<div style={{ height: '600px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={{
					lat: 54,
					lng: -2
				}}
				defaultZoom={4}
			>
				{countriesLocation}
			</GoogleMapReact>
		</div>
	);
};

export default Map;