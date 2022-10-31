import { createSlice } from '@reduxjs/toolkit';

const sessionVideoSlice = createSlice({
  name: 'sessionVideo',
  initialState: {
    customers: [],
    currentCustomer: {},
    currentCustomerCourse: {},
    currentCustomerCourseVideos: {},
    isModalAssignVideosOpen: false,
    specialistVideoIds: [],
  },
  reducers: {
    getAllCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setCurrentCustomerCourseVideos: (state, action) => {
      state.currentCustomerCourseVideos = action.payload;
    },
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload;
    },
    setCurrentCustomerCourse: (state, action) => {
      state.currentCustomerCourse = action.payload;
    },
    showModalAssignVideos: (state, action) => {
      state.isModalAssignVideosOpen = action.payload;
    },
    setSpecialistVideoIds: (state, action) => {
      state.specialistVideoIds = [...state.specialistVideoIds, action.payload];
    },
    removeSpecialistVideoIds: (state, action) => {
      state.specialistVideoIds = state.specialistVideoIds.filter(
        (item) => item !== action.payload
      );
    },
    clearSpecialistVideoIds: (state, action) => {
      state.specialistVideoIds = action.payload;
    },
  },
});

const {
  getAllCustomers,
  setCurrentCustomerCourseVideos,
  setCurrentCustomer,
  setCurrentCustomerCourse,
  showModalAssignVideos,
  setSpecialistVideoIds,
  removeSpecialistVideoIds,
  clearSpecialistVideoIds,
} = sessionVideoSlice.actions;

export default sessionVideoSlice.reducer;

export {
  getAllCustomers,
  setCurrentCustomerCourseVideos,
  setCurrentCustomer,
  setCurrentCustomerCourse,
  showModalAssignVideos,
  setSpecialistVideoIds,
  removeSpecialistVideoIds,
  clearSpecialistVideoIds,
};
