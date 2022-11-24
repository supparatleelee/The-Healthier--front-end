import axios from '../config/axios';

export const bookingSpecialist = (specialistId, courseDuration) =>
  axios.post(`/session/${specialistId}`, courseDuration);
