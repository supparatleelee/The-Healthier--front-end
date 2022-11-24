import axios from '../config/axios';

export const getChat = (friendId) => axios.get(`/chat/${friendId}`);
export const getRoomApi = () => axios.get(`/chat/getAllRoom`);
export const createMessage = (input) => axios.post('/chat/newMessage', input);
export const createChatRoom = (id) => axios.post('/chat/room', { id });
