import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { showLoading: false },
  reducers: {
    loading: (state, action) => {
      state.showLoading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
const { loading } = loadingSlice.actions;
export { loading };
