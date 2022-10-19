import { Link } from 'react-router-dom';
import PublicVideoItem from './PublicVideoItem';

function SpecialistContainer() {
  return (
    <div className="bg-white rounded-xl shadow-allSides mt-8 p-6 animate-fadeIn">
      <div className="menus flex gap-10 pb-5">
        <button type="button" className="font-semibold">
          <Link to="/specialists/1">Sample Videos</Link>
        </button>
        <button type="button" className="font-semibold text-darkGrey">
          <Link to="/specialists/1/rating-and-review">Rating & Review</Link>
        </button>
      </div>

      <hr />

      <div className="public-videos pt-10 pb-5 flex flex-wrap justify-start gap-8">
        <PublicVideoItem />
        <PublicVideoItem />
        <PublicVideoItem />
        <PublicVideoItem />
        <PublicVideoItem />
        <PublicVideoItem />
      </div>
    </div>
  );
}

export default SpecialistContainer;
