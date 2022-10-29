import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../../reduxStore/LoadingSlice';
import * as specialistVideoService from '../../api/specialistVideoApi';
import toastDisplaySuccess from '../../Toast/toastDisplaySuccess';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import { useState } from 'react';
import { thunkGetVideos } from '../../reduxStore/videoSlice';

function EditVideoForm({ onModalClose }) {
  const dispatch = useDispatch();
  const currentVideoState = useSelector((state) => state.video.currentVideo);

  const [name, setName] = useState(currentVideoState.name);
  const [videoStatus, setVideoStatus] = useState(currentVideoState.videoStatus);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updateValue = {
        id: currentVideoState.id,
        name: name,
        videoStatus: videoStatus,
      };
      dispatch(loading(true));
      await specialistVideoService.editVideo(updateValue);
      setName('');
      setVideoStatus('');
      toastDisplaySuccess('Edited Video');
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <video controls="controls">
        <source src={currentVideoState.videoFiles} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <input
          id="video-title"
          type="text"
          className="rounded-xl w-full h-[6.2vh] border-gray-400"
          placeholder="Video Title"
          name="video-title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <select
          id="video-permission"
          className="rounded-xl w-full h-[6.2vh] border-gray-400"
          name="video-permission"
          value={videoStatus}
          onChange={(e) => setVideoStatus(e.target.value)}
        >
          <option value="">Select this video permission</option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
      >
        Continue
      </button>
    </form>
  );
}

export default EditVideoForm;
