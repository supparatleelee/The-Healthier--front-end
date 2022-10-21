import { useNavigate } from 'react-router-dom';

function SessionVideo() {
  const navigate = useNavigate();
  return (
    <button
      className="flex mb-5"
      onClick={() => navigate('/specialist/1/sessions/1')}
    >
      <div className="video bg-lightGrey h-[20vh] w-[35vh] text-center mr-5">
        Video Mock Up
      </div>

      <div className="right-div">
        <h3 className="font-medium">[Video's Title]</h3>

        <p className="text-darkGrey text-[14px]">12 Oct 2022</p>
      </div>
    </button>
  );
}

export default SessionVideo;
