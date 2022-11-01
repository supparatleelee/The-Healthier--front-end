// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Area from '../recommendedSpecialists/Area';
import { Link } from 'react-router-dom';
import { thunkCreateChatRoom } from '../../reduxStore/ChatSlice';
// import Area from '../recommendedSpecialists/Area';
// import { thunkSession } from '../../reduxStore/SessionSlice';

function SpecialistDetails({
  firstName,
  lastName,
  area,
  expertises,
  profileImage,
  courseDuration,
  followupDate,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { specialistId } = useParams();

  const handleClickCreateRoom = (e) => {
    e.preventDefault();
    console.log(specialistId);
    dispatch(thunkCreateChatRoom(specialistId));
  };

  return (
    <div className=" h-62 flex justify-between pt-6 ml-[35px] mr-[50px] pb-10">
      <div className="left-div">
        <img
          className="rounded-xl"
          src={
            profileImage ||
            `http://idl.campus.ciencias.ulisboa.pt/wp-content/plugins/idl/img/undefined.png`
          }
          alt="Specialist-profile"
          height="200px"
          width="200px"
        />
      </div>
      <div className="right-div flex flex-col justify-between w-[80%] gap-3">
        <h1 className="font-bold text-[24px]">
          {firstName} {lastName}
        </h1>
        <div className="areas flex gap-3">
          <Area area={area} />
          {expertises.map((item, index) => (
            <Area key={index} area={item.name} />
          ))}
        </div>
        <p>Course: Burn Fat | Coure Duration: {courseDuration} days</p>

        <div className="buttons flex gap-3">
          <button
            className="bg-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] "
            onClick={handleClickCreateRoom}
          >
            <Link to={`/chat/${specialistId}`}>Message</Link>
          </button>
          <div className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3">
            Next follow-up date: {followupDate || 'Undefined'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialistDetails;
