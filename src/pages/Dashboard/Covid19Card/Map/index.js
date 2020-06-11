import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const Map = () => {
	const [latest, SetLatest] = useState([]);
	const [results, SetResults] = useState([]);

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
			.catch(console.log);
	}, []);
	console.log(latest);
	console.log(results);
	return null;
};

export default Map;
