import { useSelector } from 'react-redux';

function SessionVideo() {
  const state = useSelector((state) => state.session.currentVideo);

  return (
    <div className="left-div w-[60%] h-full z-[-1]">
      <video
        className="bg-gray-300 w-full mb-5 text-center"
        controls="controls"
      >
        <source src={state.videoFiles} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-[20px]">{state.name}</h1>
        <p className="text-darkGrey">{state.createdAt}</p>
      </div>
    </div>
  );
}

export default SessionVideo;
