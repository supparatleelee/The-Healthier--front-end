import axios from '../config/axios';

export const updateUser = (input) => axios.patch('user/kyc', input);
