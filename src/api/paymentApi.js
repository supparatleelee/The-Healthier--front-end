import axios from '../config/axios';

export const payment = (input) => axios.post('/history/payment', input);
export const getPackage = () => axios.get('/package');
