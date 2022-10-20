import axios from '../config/axios';

export const getSpecialists = () => axios.get('specialist/');
