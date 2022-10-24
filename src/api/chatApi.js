import axios from '../config/axios';

export const getChat = (friendId) => axios.get(`/chat/${friendId}`);
export const getRoomApi = () => axios.get(`/chat/getAllRoom`);
export const createMessage = (input) => axios.post('/chat/newMessage', input);
