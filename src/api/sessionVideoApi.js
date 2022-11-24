import axios from '../config/axios';

export const getAllSessionVideo = () => axios.get('/sessionvideo');
export const assignSessionVideos = (sessionId, specialistVideoIds) =>
  axios.post('/sessionvideo', {
    sessionId: sessionId,
    specialistVideoIds: specialistVideoIds,
  });
