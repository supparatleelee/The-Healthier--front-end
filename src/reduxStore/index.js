import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import specialistReducer from './SpecialistSlice';
import loadingReducer from './LoadingSlice';
import sessionReducer from './SessionSlice';
import uploadVideoReducer from './UploadVideoSlice';
import chatReducer from './ChatSlice';
import bookingReducer from './BookingSlice';
import videoReducer from './videoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    specialist: specialistReducer,
    loading: loadingReducer,
    session: sessionReducer,
    uploadVideo: uploadVideoReducer,
    chat: chatReducer,
    bookingSpecialist: bookingReducer,
    video: videoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
