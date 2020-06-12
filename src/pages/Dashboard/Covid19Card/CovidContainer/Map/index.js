import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import API_KEY from '../../../../../keys/googleAPI';

import MapSelection from './Selection';

const CountriesData = styled.div`
	color: white;
	border: 2px solid red;
	background: lightcoral;
	padding: 12px;
	width: fit-content;
	border-radius: 80%;
`;

const Map = ({ results }) => {
	const objMap = {
		cases: 'cases',
		deaths: 'deaths',
		tests: 'tests'
	};

	const [category, setCategory] = useState(objMap.cases);

	const countriesLocation = results.map(data => {
		return (
			<CountriesData
				key={data.country}
				lat={data.countryInfo.lat}
				lng={data.countryInfo.long}
			>
				{data[category]
					.toString()
					.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
			</CountriesData>
		);
	});

	return (
		<div style={{ height: '535px', width: '100%', overflow: 'hidden' }}>
			<MapSelection title={objMap[category]} />
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
