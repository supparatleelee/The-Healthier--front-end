import axios from '../config/axios';

export const getSessions = (id) => axios.get(`/session/get/${id}`);
export const getMySpecialist = () => axios.get('/session/getMySpecialist');
