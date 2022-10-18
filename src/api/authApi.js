import axios from '../config/axios';

export const signup = (input) => axios.post('/auth/signup', input);
export const login = ({ email, password }) =>
  axios.post('auth/login', { email, password });
export const getMe = () => axios.get('auth/me');
