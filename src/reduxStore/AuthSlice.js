import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utils/localStorage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
  },
  reducers: {
    showUser: (state, action) => {
      state.userInfo = { ...action.payload };
    },
  },
});

const { showUser } = authSlice.actions;

export const thunkSignup = (registerInfo) => async (dispatch) => {
  try {
    const res = await authService.signup(registerInfo);
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
  } catch (error) {
    throw error;
  } finally {
  }
};
export const thunkLogin = (loginInfo) => async (dispatch) => {
  try {
    const res = await authService.login(loginInfo);
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
  } catch (error) {
    throw error;
  } finally {
  }
};

export default authSlice.reducer;
export { showUser };
