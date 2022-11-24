import { useSelector } from 'react-redux';
import SessionVideoList from './SessionVideoList';

function SessionPlaylist() {
  const videos = useSelector(
    (state) => state.session.myCurrentSpecialistVideos
  );

  return (
    <div className="right-div w-[40%] h-full bg-white border rounded-xl z-[-1]">
      <div className="session-title font-medium p-3 flex justify-between items-center">
        <h2 className="font-medium ">Session 1</h2>
        <button className="bg-white border border-primary pt-1 pb-1 pl-10 pr-10 rounded-lg text-black hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:text-white">
          Session Complete
        </button>
      </div>

      <hr />
      {videos.map((item, index) => (
        <SessionVideoList
          key={index}
          title={item.name}
          uploadedAt={item.createdAt}
          id={item.id}
          video={item.videoFiles}
          item={item}
        />
      ))}
    </div>
  );
}

export default SessionPlaylist;
