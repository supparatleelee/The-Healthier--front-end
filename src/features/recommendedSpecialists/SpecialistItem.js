import { Link, useParams } from 'react-router-dom';
import { CancleDark } from '../../components/icons';
import Area from './Area';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSpecialistIndex,
  setCurrentSpecialist,
} from '../../reduxStore/SpecialistSlice';
import { thunkCreateChatRoom } from '../../reduxStore/ChatSlice';

function SpecialistItem({
  firstName,
  lastName,
  description,
  area,
  id,
  profileImage,
  index,
  specialistData,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.specialist.pageNavigation);

  const handleClickCreateRoom = (e) => {
    e.preventDefault();
    dispatch(thunkCreateChatRoom(id));
  };

  const handleOnClick = () => {
    if (state === 'recommended') {
      dispatch(setCurrentSpecialist(specialistData));
    }
    if (state === 'search') {
      dispatch(getSpecialistIndex(index));
    }
  };

  let isSearchResult = 1;

  return (
    <div className="bg-white w-[49%] rounded-xl shadow-2xl mb-3 p-8">
      <div className="specialist-details flex gap-3 w-full">
        <div className="left-div flex rounded-xl gap-5">
          <img
            className="rounded-xl"
            src={
              profileImage ||
              `http://idl.campus.ciencias.ulisboa.pt/wp-content/plugins/idl/img/undefined.png`
            }
            height="200px"
            width="200px"
            alt="Specialist-Profile"
          />
        </div>

        <div className="right-div flex flex-col gap-5 w-[70%]">
          <h1 className="font-semibold">{firstName + ' ' + lastName}</h1>
          <div className="areas flex gap-3">
            <Area area={area} />
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div className="buttons flex justify-between gap-3 mt-5">
        <button
          className="bg-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
          onClick={handleOnClick}
        >
          <Link to={`/specialists/${id}`}>See This Specialist Profile</Link>
        </button>
        {isSearchResult ? (
          <button
            className="flex justify-between items-center border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg gap-3 font-medium"
            onClick={handleClickCreateRoom}
          >
            <Link to={`/chat/${id}`}>Message</Link>
          </button>
        ) : (
          <button className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3 font-medium">
            <CancleDark />
            Not Interested
          </button>
        )}
      </div>
    </div>
  );
}

export default SpecialistItem;
