import axios from '../config/axios';

export const getAllVideos = () => axios.get('/video');

export const uploadVideo = (input) => axios.post('/video', input);
export const editVideo = (updateValue) =>
  axios.post('/video/updateVideo', updateValue);
export const deleteVideo = (id) => axios.delete(`/video/${id}`);
