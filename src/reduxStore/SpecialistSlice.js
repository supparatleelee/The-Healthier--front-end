import { createSlice } from '@reduxjs/toolkit';
import * as specialistService from '../api/specialistApi';
const specialistSlice = createSlice({
  name: 'specialist',
  initialState: {
    specialists: [],
    searchedSpecialist: [],
  },
  reducers: {
    showSpecialist: (state, action) => {
      state.specialists = [...action.payload];
    },
    searchedSpecialist: (state, action) => {
      const searchedSpecialist = state.specialists?.filter(
        (item) =>
          item.area.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.gender.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.fistName.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.Expertise.some((value) => {
            value.name.toLowerCase().includes(action.payload.toLowerCase());
          })
      );
      state.searchedSpecialist = [...searchedSpecialist];
    },
  },
});

const { searchedSpecialist, showSpecialist } = authSlice.actions;

export const thunkGetSpecialists = () => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();
    dispatch(showSpecialist(specialists.data.specialists));
  } catch (err) {
    throw err;
  }
};

export default specialistSlice.reducer;
export { searchedSpecialist };
