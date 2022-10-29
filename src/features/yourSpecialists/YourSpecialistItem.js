import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Area from '../recommendedSpecialists/Area';
import { getSpecialistIndex } from '../../reduxStore/SpecialistSlice';

function YourSpecialistItem({ item, index }) {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-[49%] rounded-xl shadow-2xl mb-3 p-8">
      <div className="specialist-details flex gap-3 w-full">
        <div className="left-div flex rounded-xl gap-5">
          <img
            className="rounded-xl"
            src={item.profileImage}
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
          className="bg-primary pt-2 pb-2 pl-24 pr-24 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
          onClick={() => dispatch(getSpecialistIndex(index))}
        >
          <Link to={`/specialist/${item.specialistId}/sessions`}>
            See Your Sessions
          </Link>
        </button>
        <button className="flex justify-between items-center border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg gap-3 font-medium">
          Message
        </button>
      </div>
    </div>
  );
}

export default YourSpecialistItem;
