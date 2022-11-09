import { createSlice } from '@reduxjs/toolkit';
import * as specialistService from '../api/specialistApi';
import * as specialistExpertiseService from '../api/specialistExpertisesApi';
import toastDisplayFailed from '../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../Toast/toastDisplaySuccess';
const specialistSlice = createSlice({
  name: 'specialist',
  initialState: {
    specialists: [],
    searchedSpecialist: [],
    recommendedSpecialist: [],
    selectedSpecialistIndex: '',
    registerSpecialist: {},
    expertisesData: [],
    exData: [],
    pageNavigation: '',
    currentSpecialist: {},
  },

  reducers: {
    setCurrentSpecialist: (state, action) => {
      state.currentSpecialist = action.payload;
    },
    setPageNavigation: (state, action) => {
      state.pageNavigation = action.payload;
    },
    removeExData: (state, action) => {
      state.exData = state.exData.filter((item) => +item !== +action.payload);
    },
    setExData: (state, action) => {
      state.exData = [...state.exData, +action.payload];
    },
    setRegisterSpecialistData: (state, action) => {
      state.specialists = [action.payload];
    },
    showSpecialist: (state, action) => {
      state.specialists = [...action.payload];
    },
    searchedSpecialist: (state, action) => {
      state.specialists = [...action.payload.specialists];
      console.log(state.specialists, 'SearcheSpecialist');
      console.log(action.payload.search);
      console.log(action.payload.specialists);
      console.log(action.payload.navigate);
      const searchedSpecialist = state.specialists?.filter(
        (item) =>
          item?.area
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item?.gender
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item?.firstName
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item?.description
            .toLowerCase()
            .includes(action.payload.search?.toLowerCase()) ||
          item?.Expertises.some((value) =>
            value.name
              .toLowerCase()
              .includes(action.payload.search?.toLowerCase())
          )
      );
      console.log(searchedSpecialist, 'After search');
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
      switch (userInfo?.goals) {
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
        var reccomendSpecialist = state.specialists?.filter((item) =>
          item.Expertises.some((value) =>
            value.name.toLowerCase().includes(expertiseName.toLocaleLowerCase())
          )
        );
        recSpecialists.push(...reccomendSpecialist);
      }
      const filteredArr = recSpecialists.reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      state.recommendedSpecialist = [...filteredArr];
    },
  },
});

const {
  searchedSpecialist,
  getSpecialistIndex,
  setRegisterSpecialistData,
  setExData,
  removeExData,
  recommendedSpecialist,
  setPageNavigation,
  setCurrentSpecialist,
} = specialistSlice.actions;

export const thunkCreateSpecialistExpertises = (input) => async () => {
  try {
    const res = await specialistExpertiseService.createSpecialistExpertise(
      input
    );
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export const thunkRegisterSpecialists = (input) => async () => {
  try {
    const res = await specialistService.registerSpecialists(input);
    toastDisplaySuccess('Registered');
  } catch (err) {
    toastDisplayFailed(err?.data?.message);
  } finally {
  }
};

export const thunkGetSpecialists = (search, navigate) => async (dispatch) => {
  try {
    const specialists = await specialistService.getSpecialists();
    console.log(specialists);
    dispatch(
      searchedSpecialist({
        search,
        specialists: specialists.data.specialists,
        navigate,
      })
    );
  } catch (err) {
    console.log(err);
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
export {
  searchedSpecialist,
  getSpecialistIndex,
  setRegisterSpecialistData,
  setExData,
  removeExData,
  setPageNavigation,
  setCurrentSpecialist,
};
