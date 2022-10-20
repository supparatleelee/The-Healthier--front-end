import io from 'socket.io-client';

const socket = io.connect('http://localhost:8118', { autoConnect: false });
export default socket;
