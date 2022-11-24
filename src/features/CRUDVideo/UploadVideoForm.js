import { useDispatch } from 'react-redux';
import { AddVideo } from '../../components/icons';
import { loading } from '../../reduxStore/LoadingSlice';
import * as specialistVideoService from '../../api/specialistVideoApi';
import toastDisplaySuccess from '../../Toast/toastDisplaySuccess';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import { useRef, useState } from 'react';
import { thunkGetVideos } from '../../reduxStore/videoSlice';

function UploadVideoForm({ onModalClose }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [videoStatus, setVideoStatus] = useState('');
  const [video, setVideo] = useState(null);
  const fileEl = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (!name && !videoStatus && !video) {
        return toastDisplayFailed('title or image is required');
      }
      if (name) {
        formData.append('name', name);
      }
      if (videoStatus) {
        formData.append('videoStatus', videoStatus);
      }
      if (video) {
        formData.append('video', video);
      }
      dispatch(loading(true));
      await specialistVideoService.uploadVideo(formData);
      setName('');
      setVideoStatus('');
      setVideo(null);
      // fileEl.current.value = '';
      toastDisplaySuccess('Video Created');
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
      {video ? (
        <>
          <video controls="controls">
            <source src={URL.createObjectURL(video)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <label htmlFor="video" className="text-darkGrey font-medium">
          <div className="flex flex-col gap-5 border justify-between items-center rounded-xl p-6">
            <AddVideo />
            Click to upload your video here
            <input
              type="file"
              className="hidden"
              id="video"
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setVideo(e.target.files[0]);
                }
              }}
            />
          </div>
        </label>
      )}

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

export default UploadVideoForm;
