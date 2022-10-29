import { createSlice } from '@reduxjs/toolkit';

import * as specialistVideoService from '../api/specialistVideoApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    allVideos: [],
    isUploadVideoModalOpen: false,
    isEditVideoModalOpen: false,
    isDeleteVideoModalOpen: false,
    currentVideo: [],
  },
  reducers: {
    getAllVideos: (state, action) => {
      state.allVideos = action.payload;
    },
    showModalUploadVideo: (state, action) => {
      state.isUploadVideoModalOpen = action.payload;
    },
    showModalEditVideo: (state, action) => {
      state.isEditVideoModalOpen = action.payload;
    },
    showModalDeleteVideo: (state, action) => {
      state.isDeleteVideoModalOpen = action.payload;
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
  },
});

const {
  getAllVideos,
  showModalUploadVideo,
  showModalEditVideo,
  showModalDeleteVideo,
  setCurrentVideo,
} = videoSlice.actions;

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
export {
  getAllVideos,
  showModalUploadVideo,
  showModalEditVideo,
  setCurrentVideo,
  showModalDeleteVideo,
};
