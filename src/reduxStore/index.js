import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import specialistReducer from './SpecialistSlice';
import loadingReducer from './LoadingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    specialist: specialistReducer,
    loading: loadingReducer,
  },
});
