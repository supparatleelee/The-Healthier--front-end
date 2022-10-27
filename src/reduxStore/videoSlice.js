import { createSlice } from '@reduxjs/toolkit';

import * as specialistVideoService from '../api/specialistVideoApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    allVideos: [],
  },
  reducers: {
    getAllVideos: (state, action) => {
      state.allVideos = action.payload;
    },
  },
});

const { getAllVideos } = videoSlice.actions;

export const thunkGetVideos = () => async (dispatch) => {
  try {
    const res = await specialistVideoService.getAllVideos();
    dispatch(getAllVideos(res.data.videos));
  } catch (error) {
    console.log(error);
    toastDisplayFailed(error.response?.data.message);
  }
};

export default videoSlice.reducer;
export { getAllVideos };
