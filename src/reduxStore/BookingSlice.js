import { createSlice } from '@reduxjs/toolkit';

import * as bookingService from '../api/bookingApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../Toast/toastDisplaySuccess';

const bookingSlice = createSlice({
  name: 'bookingSpecialist',
  initialState: {},
  reducers: {},
});

const {} = bookingSlice.actions;

export const thunkBooking =
  (specialistId, courseDuration) => async (dispatch) => {
    try {
      await bookingService.bookingSpecialist(specialistId, {
        courseDuration: courseDuration,
      });

      toastDisplaySuccess('booking this specialist');
    } catch (err) {
      console.log(err);
      toastDisplayFailed(err.response?.data.message);
    }
  };

export default bookingSlice.reducer;

export {};
