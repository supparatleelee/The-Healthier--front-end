import { loading } from '../../reduxStore/LoadingSlice';
import * as specialistVideoService from '../../api/specialistVideoApi';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../../Toast/toastDisplaySuccess';
import { thunkGetVideos } from '../../reduxStore/videoSlice';
import { useDispatch, useSelector } from 'react-redux';

function DeleteVideo({ onModalClose }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.video.currentVideo.id);

  const onDelete = async () => {
    try {
      dispatch(loading(true));
      await specialistVideoService.deleteVideo(id);
      toastDisplaySuccess('Delete Video');
      dispatch(thunkGetVideos());
      onModalClose();
    } catch (error) {
      console.log(error);
      toastDisplayFailed(error?.response?.data?.message);
    } finally {
      dispatch(loading(false));
    }
  };

  return (
    <div className="flex justify-between">
      <button
        className="flex justify-between items-center border border-primary pt-2 pb-2 pl-28 pr-28 rounded-lg gap-3 font-medium"
        onClick={onModalClose}
      >
        No
      </button>
      <button
        className="bg-primary pt-2 pb-2 pl-28 pr-28 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
        onClick={onDelete}
      >
        Yes
      </button>
    </div>
  );
}

export default DeleteVideo;
