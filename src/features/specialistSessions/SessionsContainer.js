import SessionVideo from './SessionVideo';
import { useSelector } from 'react-redux';

function SessionsContainer() {
  const videos = useSelector(
    (state) => state.session.myCurrentSpecialistVideos
  );

  return (
    <div className="mt-5 ml-[35px] mr-[50px] pb-5">
      {videos.map((item, index) => (
        <SessionVideo
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

export default SessionsContainer;
