import { Link } from 'react-router-dom';
import PublicVideoItem from './PublicVideoItem';

function SpecialistContainer({ videos, id }) {
  return (
    <div className="bg-white rounded-xl shadow-allSides mt-8 p-6 animate-fadeIn">
      <div className="menus flex gap-10 pb-5">
        <button type="button" className="font-semibold">
          <Link to={`/specialists/${id}`}>Sample Videos</Link>
        </button>
        <button type="button" className="font-semibold text-darkGrey">
          <Link to={`/specialists/${id}/rating-and-review`}>
            Rating & Review
          </Link>
        </button>
      </div>

      <hr />

      <div className="public-videos pt-10 pb-5 flex flex-wrap justify-start gap-8">
        {videos.length != 0 ? (
          videos.map((item, index) => (
            <PublicVideoItem
              videoTitle={item.name}
              uploadedAt={item.createdAt}
              video={item.videoFiles}
              key={index}
            />
          ))
        ) : (
          <p>No Video</p>
        )}
      </div>
    </div>
  );
}

export default SpecialistContainer;
