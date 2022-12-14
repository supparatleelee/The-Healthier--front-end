import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import specialistReducer from './SpecialistSlice';
import loadingReducer from './LoadingSlice';
import sessionReducer from './SessionSlice';
import chatReducer from './ChatSlice';
import bookingReducer from './BookingSlice';
import videoReducer from './videoSlice';
import sessionVideoReducer from './sessionVideoSlice';
import paymentReducer from './Payment';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    specialist: specialistReducer,
    loading: loadingReducer,
    session: sessionReducer,
    chat: chatReducer,
    bookingSpecialist: bookingReducer,
    video: videoReducer,
    sessionVideo: sessionVideoReducer,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
