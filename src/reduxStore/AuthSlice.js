import { createSlice } from '@reduxjs/toolkit';

import * as authService from '../api/authApi';
import * as userService from '../api/userApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../Toast/toastDisplaySuccess';
import { addAccessToken } from '../utils/localStorage';
import { loading } from './LoadingSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    isPersonalInformationModalOpen: false,
    userInputInfo: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      birthday: '',
      height: '',
      weight: '',
      goal: '',
    },
  },
  reducers: {
    showUser: (state, action) => {
      state.userInfo = action.payload;
    },
    showModalLogin: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    showModalRegister: (state, action) => {
      state.isRegisterModalOpen = action.payload;
    },
    showModalPersonalInformation: (state, action) => {
      state.isPersonalInformationModalOpen = action.payload;
    },
  },
});

const {
  showUser,
  showModalRegister,
  showModalLogin,
  showModalPersonalInformation,
} = authSlice.actions;

export const thunkGetMe = () => async (dispatch) => {
  const res = await authService.getMe();
  dispatch(showUser(res.data.user));
};

export const thunkSignup = (registerInfo, init) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authService.signup(registerInfo);
    addAccessToken(res.data.token);
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
    toastDisplaySuccess('login');
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

export const thunkUpdateUser = (updatedValue, init) => async (dispatch) => {
  try {
    dispatch(loading(true));
    await userService.updateUser(updatedValue);
    const user = await authService.getMe();
    dispatch(showUser(user.data.user));
    toastDisplaySuccess('register');
    init();
  } catch (error) {
    toastDisplayFailed(error?.response?.data?.message);
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;

export {
  showUser,
  showModalRegister,
  showModalLogin,
  showModalPersonalInformation,
};
