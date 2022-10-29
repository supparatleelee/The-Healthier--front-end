import { useDispatch } from 'react-redux';
import { DeleteBlack, Edit } from '../../components/icons';
import {
  setCurrentVideo,
  showModalDeleteVideo,
  showModalEditVideo,
} from '../../reduxStore/videoSlice';

function VideoMenus({ videoState }) {
  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(showModalEditVideo(true));
    dispatch(setCurrentVideo(videoState));
  };

  const onOpenDeleteModal = () => {
    dispatch(setCurrentVideo(videoState));
    dispatch(showModalDeleteVideo(true));
  };

  return (
    <>
      <div className="flex items-center justify-between border border-primary rounded-xl p-6 h-10">
        <button className="pr-4 border-r-[1px] border-primary" onClick={onEdit}>
          <Edit />
        </button>
        <button className="pl-4" onClick={onOpenDeleteModal}>
          <DeleteBlack />
        </button>
      </div>
    </>
  );
}

export default VideoMenus;
