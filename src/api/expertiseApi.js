import axios from '../config/axios';

export const getAllExpertises = () => axios.get('/expertises');
