import axios from '../config/axios';

export const getSpecialists = () => axios.get('specialist/');
export const registerSpecialists = (input) => axios.patch('/user/kyc', input);
