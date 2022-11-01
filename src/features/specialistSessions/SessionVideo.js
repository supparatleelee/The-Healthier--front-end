import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentVideo } from '../../reduxStore/SessionSlice';

function SessionVideo({ title, uploadedAt, id, video, item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setCurrentVideo(item));
    navigate(`/sessions/${id}`);
  };

  return (
    <button className="flex mb-5" onClick={handleOnClick}>
      <video
        className="video bg-lightGrey w-[35vh] text-center"
        controls="controls"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="right-div">
        <h3 className="font-medium">{title}</h3>

        <p className="text-darkGrey text-[14px]">{uploadedAt}</p>
      </div>
    </button>
  );
}

export default SessionVideo;
