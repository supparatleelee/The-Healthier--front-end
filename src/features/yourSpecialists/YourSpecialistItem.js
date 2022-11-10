import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Area from '../recommendedSpecialists/Area';
import { getSpecialistIndex } from '../../reduxStore/SpecialistSlice';
import { setMyCurrentSpecialistVideos } from '../../reduxStore/SessionSlice';
import { thunkCreateChatRoom } from '../../reduxStore/ChatSlice';
import * as chatRoomService from '../../api/chatApi';

function YourSpecialistItem({ item, index }) {
  const dispatch = useDispatch();

  const specialistId = item?.specialistId;
  const handleClickCreateRoom = (e) => {
    e.preventDefault();
    console.log(specialistId);
    dispatch(thunkCreateChatRoom(specialistId));
  };
  console.log(item);
  return (
    <div className="bg-white w-[49%] rounded-xl shadow-2xl mb-3 p-8">
      <div className="specialist-details flex gap-3 w-full">
        <div className="left-div flex rounded-xl gap-5">
          <img
            className="rounded-xl"
            height="200px"
            width="200px"
            src={
              item.specialist.profileImage ||
              `http://idl.campus.ciencias.ulisboa.pt/wp-content/plugins/idl/img/undefined.png`
            }
            alt="Specialist-Profile"
          />
        </div>

        <div className="right-div flex flex-col gap-5 w-[70%]">
          <h1 className="font-semibold">
            {item.specialist.firstName} {item.specialist.lastName}
          </h1>
          <div className="areas flex gap-3">
            <Area area={item.specialist.area} />
          </div>
          <p>{item.specialist.description}</p>
        </div>
      </div>

      <div className="buttons flex gap-3 mt-5">
        <button
          className="bg-primary pt-1 pb-1 pl-24 pr-24 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
          onClick={() => dispatch(getSpecialistIndex(index))}
        >
          <Link
            to={`/specialist/${item.specialistId}/sessions`}
            onClick={() =>
              dispatch(
                setMyCurrentSpecialistVideos(item.specialist.SpecialistVideos)
              )
            }
          >
            See Your Sessions
          </Link>
        </button>
        <button
          className="flex justify-between items-center border border-primary pl-[3vw] pr-[3vw] rounded-lg gap-3 font-medium"
          onClick={handleClickCreateRoom}
        >
          <Link
            to={`/chat/${item.specialistId}`}
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Messages
          </Link>
        </button>
      </div>
    </div>
  );
}

export default YourSpecialistItem;
