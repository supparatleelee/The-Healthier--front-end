import { createSlice } from '@reduxjs/toolkit';
import * as expertisesService from '../api/expertiseApi';
import * as specialistService from '../api/specialistApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../Toast/toastDisplaySuccess';
const specialistSlice = createSlice({
  name: 'specialist',
  initialState: {
    specialists: [],
    searchedSpecialist: [],
    selectedSpecialistIndex: '',
    registerSpecialist: {},
    expertisesData: [],
    exData: [],
  },
  reducers: {
    removeExData: (state, action) => {
      state.exData = state.exData.filter((item) => item !== action.payload);
    },
    setExData: (state, action) => {
      state.exData = [...state.exData, action.payload];
    },
    setRegisterSpecialistData: (state, action) => {
      state.specialists = [action.payload];
    },
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

const {
  searchedSpecialist,
  getSpecialistIndex,
  setRegisterSpecialistData,
  setExData,
  removeExData,
} = specialistSlice.actions;

export const thunkRegisterSpecialists = (input) => async () => {
  try {
    const res = await specialistService.registerSpecialists(input);
    toastDisplaySuccess('Registered');
  } catch (err) {
    toastDisplayFailed(err.data.message);
  } finally {
  }
};

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
export {
  searchedSpecialist,
  getSpecialistIndex,
  setRegisterSpecialistData,
  setExData,
  removeExData,
};
