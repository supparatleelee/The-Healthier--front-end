import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
  },
  reducers: {
    showLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    showRegister: (state, action) => {
      state.showRegister = action.payload;
    },
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      removeAccessToken();
      state.isLogin = false;
      state.userInfo = {};
    },
    rememberLogin: (state, action) => {
      state.isLogin = true;
    },
    changeProfile: (state, action) => {
      state.userInfo = { ...state.userInfo, profileImage: action.payload };
    },
  },
});

export const thunkRegister = (registerInfo) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await registerApi(registerInfo);
    res.data.status === 'success' && dispatch(register(true));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};
export const thunkLogin = (loginInfo) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await loginApi(loginInfo);
    // const res = await axios.post('/auth/login',loginInfo)
    if (res.data.status === 'success') {
      addAccessToken(res.data.token);
      dispatch(login(res.data.user));
      dispatch(thunkAuthShopData(res?.data?.user?.id));
      dispatch(thunkfetchMyCart(res?.data?.user?.id));
    }
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};
export const thunkRemember = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const user = await rememberMeApi(getAccessToken());
    user && dispatch(login(user?.data));
    dispatch(thunkAuthShopData(user?.data?.id));
    dispatch(thunkfetchMyCart(user?.data?.id));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export const thunkChangeProfilePicture = (formData, id) => async (dispatch) => {
  try {
    dispatch(loading(true));
    console.log(id);
    const user = await changeProfilePicApi(formData, id);
    dispatch(changeProfile(user?.data?.profileImage));
    console.log(user, 'user ========================');
    // user && dispatch(login(user?.data));
    // dispatch(thunkAuthShopData(user?.data?.id))
    // dispatch(thunkfetchMyCart(user?.data?.id));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;
const {
  login,
  register,
  showLogin,
  showRegister,
  rememberLogin,
  logout,
  changeProfile,
} = authSlice.actions;
export {
  login,
  register,
  showLogin,
  showRegister,
  rememberLogin,
  logout,
  changeProfile,
};
