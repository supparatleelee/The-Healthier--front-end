import { createSlice } from '@reduxjs/toolkit';
import * as specialistService from '../api/specialistApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
const specialistSlice = createSlice({
  name: 'specialist',
  initialState: {
    specialists: [],
    searchedSpecialist: [],
    recommendedSpecialist: [],
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
    recommendedSpecialist: (state, action) => {
      state.specialists = [...action.payload.specialists];
      const userInfo = action.payload.userInfo;
      let matchingExpertise;
      let recSpecialists = [];
      switch (userInfo.goals) {
        case 'Back Pain':
          matchingExpertise = [
            'Yoga',
            'Flexibility Trainning',
            'Pirates Yoga',
            'Clinical Electrophysiology',
          ];
          break;
        case 'Neck and Shoulder Ache':
          matchingExpertise = [
            'Orthopedics',
            'Yoga',
            'Flexibility Trainning',
            'Pirates Yoga',
          ];
          break;
        case 'Headache':
          matchingExpertise = ['Yoga', 'Pirates Yoga'];
          break;
        case 'Lowerbody Pain':
          matchingExpertise = [
            'Yoga',
            'Clinical Electrophysiology',
            'Body-weight Trainning',
            'Sports',
          ];
          break;
        case 'Ready to Play':
          matchingExpertise = [
            'Sports',
            'Body-weight Trainning',
            'Flexibility Trainning',
            'Food nutrition',
            'Clinical Electrophysiology',
            'Food for convalescents',
            'Cardiovascular',
          ];
          break;
        case 'After Surgery Recovery':
          matchingExpertise = [
            'Geriatrics',
            'Senior Trainning',
            'Food for convalescents',
            'Flexibility Trainning',
            'Cardiovascular',
          ];
          break;
        case 'Slimming':
          matchingExpertise = [
            'HIIT Trainning',
            'Cardio',
            'Obese people Trainning',
            'Boxing',
            'Aerobic Drance',
            'Food nutrition',
            'Body-weight Trainning',
          ];
          break;
        case 'Burn Fat':
          matchingExpertise = [
            'HIIT Trainning',
            'Cardio',
            'Obese people Trainning',
            'Boxing',
            'Aerobic Drance',
            'Food nutrition',
            'Body-weight Trainning',
            'Weight Trainning',
            'Yoga',
          ];
          break;
        case 'Building Muscle':
          matchingExpertise = [
            'HIIT Trainning',
            'Body-weight Trainning',
            'Weight Trainning',
            'Abdominal muscles building',
            'Boxing',
            'Muscle Building',
            'Food nutrition',
          ];
          break;
        case 'Just for Fun':
          matchingExpertise = [
            'Sports',
            'Body-weight Trainning',
            'Weight Trainning',
            'Yoga',
            'Flexibility Trainning',
            'Kids Trainning',
            'Pirates Yoga',
            'Boxing',
            'Aerobic Drance',
            'Food nutrition',
          ];
          break;
        case 'Other':
          matchingExpertise = [
            'Cardiovascular',
            'Cardiovascular',
            'Geriatrics',
            'Oncology',
            'Orthopedics',
            'Sports',
            'Womens Health',
            'HIIT Trainning',
            'Body-weight Trainning',
            'Weight Trainning',
            'Yoga',
            'Cardio',
            'Cardio',
            'Senior Trainning',
            'Kids Trainning',
            'Pirates Yoga',
            'Boxing',
            'Aerobic Drance',
            'Food nutrition',
            'Food for Senoir',
            'Food for convalescents',
            'Food for allergic people',
          ];
          break;
        default:
          break;
      }
      for (const expertiseName of matchingExpertise) {
        const reccomendSpecialist = state.specialists?.filter((item) =>
          item.Expertises.some((value) =>
            value.name.toLowerCase().includes(expertiseName)
          )
        );
        recSpecialists.push(...reccomendSpecialist);
      }
      state.recommendedSpecialist = [...recSpecialists];
    },
  },
});

const { searchedSpecialist, getSpecialistIndex, recommendedSpecialist } =
  specialistSlice.actions;

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

export const thunkGetRecommendedSpecialist = (userInfo) => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();
    dispatch(
      recommendedSpecialist({
        userInfo,
        specialists: specialists.data.specialists,
      })
    );
  } catch (err) {
    toastDisplayFailed(err?.response?.data?.message);
  }
};

export default specialistSlice.reducer;
export { searchedSpecialist, getSpecialistIndex };
