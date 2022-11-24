import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import SpecialistItem from '../features/recommendedSpecialists/SpecialistItem';
import CalendarDisplay from '../features/calendar/CalendarDisplay';
import { useEffect } from 'react';
import {
  setPageNavigation,
  thunkGetRecommendedSpecialist,
} from '../reduxStore/SpecialistSlice';
function HomePage() {
  const recommendedSpecialist = useSelector(
    (state) => state.specialist.recommendedSpecialist
  );
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetRecommendedSpecialist(userInfo));
    dispatch(setPageNavigation('recommended'));
  }, [userInfo]);

  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      {/* <CalendarDisplay /> */}
      <div className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Recommended Specialists For You
      </div>
      <div className="recommended-container">
        <div className="recommended-specialist-1">
          <div className="specailist-list-container flex justify-between mt-3 mb-3 gap-3 flex-wrap">
            {recommendedSpecialist.map((item, index) => (
              <SpecialistItem
                key={index}
                firstName={item?.firstName}
                lastName={item?.lastName}
                description={item?.description}
                area={item?.area}
                id={item?.id}
                profileImage={item?.profileImage}
                specialistData={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
