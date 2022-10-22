import { createSlice } from '@reduxjs/toolkit';

const uploadVideoSlice = createSlice({
  name: 'uploadVideo',
  initialState: {
    isUploadVideoModalOpen: false,
  },
  reducers: {
    showModalUploadVideo: (state, action) => {
      state.isUploadVideoModalOpen = action.payload;
    },
  },
});

const { showModalUploadVideo } = uploadVideoSlice.actions;

export default uploadVideoSlice.reducer;

export { showModalUploadVideo };
