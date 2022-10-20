import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';
import * as userService from '../api/userApi';
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
    // const res = await axios.post('/auth/login',loginInfo)
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
  } catch (error) {
    throw error;
  } finally {
  }
};

export const thunkUpdateUser = (updatedValue) => async (dispatch) => {
  try {
    const user = await userService.updateUser(updatedValue);
    dispatch(showUser(user.data.user));
  } catch (err) {
    throw err;
  }
};

export default authSlice.reducer;
export { showUser };
