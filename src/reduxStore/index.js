import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import specialistReducer from './SpecialistSlice';
import loadingReducer from './LoadingSlice';
import sessionReducer from './SessionSlice';
import uploadVideoReducer from './UploadVideoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    specialist: specialistReducer,
    loading: loadingReducer,
    session: sessionReducer,
    uploadVideo: uploadVideoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
