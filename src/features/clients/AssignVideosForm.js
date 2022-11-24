import { useSelector } from 'react-redux';
import SearchUploadedVideos from '../CRUDVideo/SearchUploadedVideos';
import AllVideos from './AllVideos';
import * as sessionVideoService from '../../api/sessionVideoApi';
import { useDispatch } from 'react-redux';
import {
  clearSpecialistVideoIds,
  removeSpecialistVideoIds,
  setCurrentCustomerCourseVideos,
  setSpecialistVideoIds,
  showModalAssignVideos,
} from '../../reduxStore/sessionVideoSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../../Toast/toastDisplaySuccess';
import { loading } from '../../reduxStore/LoadingSlice';

function AssignVideosForm({ sessionId }) {
  const dispatch = useDispatch();
  const videosState = useSelector((state) => state.video.allVideos);
  const state = useSelector((state) => state.sessionVideo.specialistVideoIds);

  const specialistVideoIdsInput = (e) => {
    if (e.target.checked) {
      dispatch(setSpecialistVideoIds(e.target.value));
    }
    if (!e.target.checked) {
      dispatch(removeSpecialistVideoIds(e.target.value));
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loading(true));
      const res = await sessionVideoService.assignSessionVideos(
        sessionId,
        state
      );
      dispatch(clearSpecialistVideoIds([]));
      dispatch(
        setCurrentCustomerCourseVideos(
          res.data.sessionVideo[0].SpecialistVideos
        )
      );
      toastDisplaySuccess('Assign Videos');
      dispatch(showModalAssignVideos(false));
    } catch (error) {
      toastDisplayFailed(error?.response?.data?.message);
    } finally {
      dispatch(loading(false));
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <SearchUploadedVideos />

      <div className="mt-5">
        {videosState.map((item, index) => (
          <AllVideos
            key={index}
            videoTitle={item.name}
            videoPermission={item.videoStatus}
            uploadedAt={item.createdAt}
            videoUrl={item.videoFiles}
            videoState={item}
            specialistVideoIdsInput={specialistVideoIdsInput}
          />
        ))}
      </div>

      <button className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] w-full rounded-xl h-[6vh] text-white">
        Countine
      </button>
    </form>
  );
}

export default AssignVideosForm;
