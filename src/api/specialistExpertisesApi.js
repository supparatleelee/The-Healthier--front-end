import axios from '../config/axios';

export const createSpecialistExpertise = (input) =>
  axios.post('/specialistexpertise', input);
