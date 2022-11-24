import { createSlice } from '@reduxjs/toolkit';
import * as sessionService from '../api/sessionApi';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessionInfo: [],
    mySpecialists: [],
    myCurrentSpecialistVideos: [],
    currentVideo: {},
  },
  reducers: {
    session: (state, action) => {
      state.sessionInfo = action.payload;
    },
    showMySpecialists: (state, action) => {
      state.mySpecialists = action.payload;
      console.log(state.mySpecialists);
    },
    setMyCurrentSpecialistVideos: (state, action) => {
      state.myCurrentSpecialistVideos = action.payload;
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
  },
});

const {
  session,
  showMySpecialists,
  setMyCurrentSpecialistVideos,
  setCurrentVideo,
} = sessionSlice.actions;

export const thunkSession = (id) => async (dispatch) => {
  try {
    const getSession = await sessionService.getSessions(id);
    dispatch(session(getSession.data.session));
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export const thunkMySpecialists = () => async (dispatch) => {
  try {
    const getMySpecialists = await sessionService.getMySpecialist();
    dispatch(showMySpecialists(getMySpecialists.data));
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export default sessionSlice.reducer;
export {
  session,
  showMySpecialists,
  setMyCurrentSpecialistVideos,
  setCurrentVideo,
};
