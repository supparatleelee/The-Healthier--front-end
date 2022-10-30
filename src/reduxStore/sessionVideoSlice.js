import { createSlice } from '@reduxjs/toolkit';

const sessionVideoSlice = createSlice({
  name: 'sessionVideo',
  initialState: {
    customers: [],
  },
  reducers: {
    getAllCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

const { getAllCustomers } = sessionVideoSlice.actions;

export default sessionVideoSlice.reducer;

export { getAllCustomers };
