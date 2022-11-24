import { createSlice } from '@reduxjs/toolkit';
import * as paymentService from '../api/paymentApi';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: { isshowPayment: false, packages: [], isShowSuccess: false },
  reducers: {
    payment: (state, action) => {
      state.isshowPayment = action.payload;
    },
    paymentSuccess: (state, action) => {
      state.isShowSuccess = action.payload;
    },
    getPackages: (state, action) => {
      state.packages = action.payload;
      console.log(state.packages);
    },
  },
});
const { payment, getPackages, paymentSuccess } = paymentSlice.actions;

export const thunkGetPackage = () => async (dispatch) => {
  try {
    const getDataPackages = await paymentService.getPackage();
    dispatch(getPackages(getDataPackages.data.packages));
  } catch (err) {
    console.log(err);
  }
};

export default paymentSlice.reducer;
export { payment, getPackages, paymentSuccess };
