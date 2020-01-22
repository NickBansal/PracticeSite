import clientIO from '.';

const ioServer = require('socket.io').listen(3001);

describe('basic socket.io example', function() {
	beforeEach(function() {});

	afterEach(done => {
		ioServer.close();
		done();
	});

	it('should communicate', done => {
		const client = clientIO(() => {
			console.log('boot up client');
			client(message => {
				expect(message).toBe('Hello World');
				done();
			});

			console.log('emit event');
			ioServer.emit('echo', 'Hello World');
		});
	});
});
