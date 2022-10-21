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
      state.specialists = [...action.payload.specialists];
      const searchedSpecialist = state.specialists?.filter(
        (item) =>
          item.area
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item.gender
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item.firstName
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item.Expertises.some((value) =>
            value.name
              .toLowerCase()
              .includes(action.payload.search?.toLowerCase())
          )
      );

      state.searchedSpecialist = [...searchedSpecialist];
    },
  },
});

const { searchedSpecialist, showSpecialist } = specialistSlice.actions;

export const thunkGetSpecialists = (search) => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();

    // dispatch(showSpecialist(specialists.data.specialists));

    dispatch(
      searchedSpecialist({ search, specialists: specialists.data.specialists })
    );
  } catch (err) {
    toastDisplayFailed(err?.response?.data?.message);
  }
};

export default specialistSlice.reducer;
export { searchedSpecialist };
