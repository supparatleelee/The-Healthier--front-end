import axios from '../config/axios';

export const getAllVideos = () => axios.get('/video');
