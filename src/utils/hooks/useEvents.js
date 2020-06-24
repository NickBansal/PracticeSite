import { useEffect } from 'react';

const useEvent = (event, handler) => {
	useEffect(() => {
		document.addEventListener(event, handler);

		return () => {
			document.removeEventListener(event, handler);
		};
	});
};

export default useEvent;
