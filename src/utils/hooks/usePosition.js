import { useState, useEffect } from 'react';

export default () => {
	const [position, setPosition] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const onChange = ({ coords }) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude
		});
	};

	const onError = newError => {
		setError(newError.message);
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		if (!geo) {
			setError('Geolocation is not supported');
			return;
		}

		const watcher = geo.watchPosition(onChange, onError);
		setLoading(false);
		return () => geo.clearWatch(watcher);
	}, []);

	return { ...position, loading, error };
};
