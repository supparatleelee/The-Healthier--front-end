import axios from '../config/axios';

export const getSessions = () => axios.get('/session');
