import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import API_KEY from '../../../../keys/googleAPI';

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

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={{
					lat: 59.95,
					lng: 30.33
				}}
				defaultZoom={10}
			>
				{/* <AnyReactComponent
					lat={59.955413}
					lng={30.337844}
					text="My Marker"
				/> */}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
