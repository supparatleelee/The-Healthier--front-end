import { Link } from 'react-router-dom';

function SpecialistRatingsAndReviews(id) {
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
        <p>Future Release</p>
      </div>
    </div>
  );
}

export default SpecialistRatingsAndReviews;
