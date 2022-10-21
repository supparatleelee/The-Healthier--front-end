import { createSlice } from '@reduxjs/toolkit';
import * as specialistService from '../api/specialistApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
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
      console.log(state.specialists);
      const searchedSpecialist = state.specialists?.filter(
        (item) =>
          item.area.toLowerCase().includes(action.payload?.toLowerCase()) ||
          item.gender.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.fistName.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.Expertise.some((value) =>
            value.name.toLowerCase().includes(action.payload.toLowerCase())
          )
      );
      state.searchedSpecialist = [...searchedSpecialist];
      console.log(state.searchedSpecialist);
    },
  },
});

const { searchedSpecialist, showSpecialist } = specialistSlice.actions;

export const thunkGetSpecialists = () => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();

    dispatch(showSpecialist(specialists.data.specialists));

    // dispatch(searchedSpecialist(search));
  } catch (err) {
    toastDisplayFailed(err?.response?.data?.message);
  }
};

export default specialistSlice.reducer;
export { searchedSpecialist };
