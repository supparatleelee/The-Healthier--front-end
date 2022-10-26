import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import * as specialistService from '../api/specialistApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
const specialistSlice = createSlice({
  name: 'specialist',
  initialState: {
    specialists: [],
    searchedSpecialist: [],
    selectedSpecialistIndex: '',
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

      action.payload.navigate('/search-result', {
        state: state.searchedSpecialist,
      });
    },
    getSpecialistIndex: (state, action) => {
      state.selectedSpecialistIndex = action.payload;
    },
  },
});

const { searchedSpecialist, getSpecialistIndex } = specialistSlice.actions;

export const thunkGetSpecialists = (search, navigate) => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();
    dispatch(
      searchedSpecialist({
        search,
        specialists: specialists.data.specialists,
        navigate,
      })
    );
  } catch (err) {
    toastDisplayFailed(err?.response?.data?.message);
  }
};

export default specialistSlice.reducer;
export { searchedSpecialist, getSpecialistIndex };
