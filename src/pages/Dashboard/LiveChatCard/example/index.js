const io = require('socket.io-client');

export default onReady => {
	console.log('listener set up');
	const client = io.connect('http://localhost:3001', {
		'reconnection delay': 0,
		'reopen delay': 0,
		'force new connection': true,
		transports: ['websocket']
	});

	client.on('connect', () => {
		console.log('connected');
		onReady();
	});

	const method = callback => {
		console.log('callback called');
		client.on('echo', message => {
			console.log('event called');
			callback(message);
		});
	};

	return method;
};
