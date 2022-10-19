import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../Toast/toastDisplaySuccess';
import { addAccessToken } from '../utils/localStorage';
import { loading } from './LoadingSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: null,
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
  },
  reducers: {
    showUser: (state, action) => {
      state.userInfo = { ...action.payload };
    },
    showModalLogin: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    showModalRegister: (state, action) => {
      state.isRegisterModalOpen = action.payload;
    },
  },
});

const { showUser, showModalRegister, showModalLogin } = authSlice.actions;

export const thunkGetMe = () => async (dispatch) => {
  const res = await authService.getMe();
  dispatch(showUser(res.data.user));
};

export const thunkSignup = (registerInfo, init) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authService.signup(registerInfo);
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
    toastDisplaySuccess('register');
    init();
    dispatch(showModalRegister(false));
  } catch (error) {
    toastDisplayFailed(error?.response?.data?.message);
  } finally {
    dispatch(loading(false));
  }
};

export const thunkGooglelogin = (tokenId) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authService.googleLogin(tokenId);
    toastDisplaySuccess('success');
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
    dispatch(showModalRegister(false));
    dispatch(showModalLogin(false));
  } catch (error) {
    toastDisplayFailed(error?.response?.data?.message);
  } finally {
    dispatch(loading(false));
  }
};

export const thunkLogin = (data, init) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authService.login(data);
    toastDisplaySuccess('login');
    addAccessToken(res.data.token);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
    dispatch(showModalLogin(false));
    init();
  } catch (error) {
    toastDisplayFailed(error?.response?.data?.message);
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;
export { showUser, showModalRegister, showModalLogin };
