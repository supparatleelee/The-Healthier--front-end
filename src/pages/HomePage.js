import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SpecialistItem from '../features/recommendedSpecialists/SpecialistItem';

function HomePage() {
  const state = useSelector((state) => state.specialist);

  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <div className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Recommended Specialists For You
      </div>

      <div className="recommended-container">
        <div className="recommended-specialist-1">
          <div className="area-title mt-5 text-[18px] font-medium">
            [Recommended Area Title]
          </div>
          <div className="specailist-list-container flex justify-between mt-3 mb-3 gap-3">
            <SpecialistItem />
            <SpecialistItem />
          </div>
        </div>

        <div className="recommended-specialist-2 ">
          <div className="area-title mt-5 text-[18px] font-medium">
            [Recommended Area Title]
          </div>
          <div className="specailist-list-container flex justify-between mt-3 mb-3 gap-3">
            <SpecialistItem />
            <SpecialistItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
