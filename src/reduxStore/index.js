import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import specialistReducer from './SpecialistSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    specialist: specialistReducer,
  },
});
