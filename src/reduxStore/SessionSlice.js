import { createSlice } from '@reduxjs/toolkit';
import * as sessionService from '../api/sessionApi';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessionInfo: {},
  },
  reducers: {
    session: (state, action) => {
      state.sessionInfo = { ...action.payload.session[0] };
    },
  },
});

const { session } = sessionSlice.actions;

export const thunkSession = () => async (dispatch) => {
  try {
    const getSession = await sessionService.getSessions();
    dispatch(session(getSession.data));
    // console.log(getSession.data);
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export default sessionSlice.reducer;
export { session };
