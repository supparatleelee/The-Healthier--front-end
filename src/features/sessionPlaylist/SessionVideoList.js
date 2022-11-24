import { useNavigate } from 'react-router-dom';

function SessionVideoList({ title, uploadedAt, video }) {
  const navigate = useNavigate();
  return (
    <button
      className="flex mb-5 p-5"
      onClick={() => navigate('/specialist/1/sessions/1')}
    >
      <video
        className="video bg-lightGrey h-[20vh] w-[35vh] mr-5"
        controls="controls"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="right-div flex flex-col">
        <h3 className="font-medium">{title}</h3>

        <p className="text-darkGrey text-[14px]">{uploadedAt}</p>
      </div>
    </button>
  );
}

export default SessionVideoList;
