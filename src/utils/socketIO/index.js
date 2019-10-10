import socketIOClient from 'socket.io-client';

const endpoint = 'http://127.0.0.1:8080/';
export default socketIOClient(endpoint);
