import { useNavigate } from 'react-router-dom';
import Area from '../recommendedSpecialists/Area';

function SpecialistDetails() {
  const navigate = useNavigate();

  return (
    <div className=" h-62 flex justify-between pt-6 ml-[35px] mr-[50px] pb-10">
      <div className="left-div">
        <img
          className="rounded-xl"
          src="https://res.cloudinary.com/waniga/image/upload/v1666025303/Rectangle_45_fbqnqi.png"
          alt="Specialist-profile"
          height="200px"
          width="200px"
        />
      </div>
      <div className="right-div flex flex-col justify-between w-[80%] gap-3">
        <h1 className="font-bold text-[24px]">Alex Samethan</h1>
        <div className="areas flex gap-3">
          <Area />
          <Area />
          <Area />
        </div>
        <p>Course: Burn Fat | Coure Duration: 30 days</p>

        <div className="buttons flex gap-3">
          <button
            className="bg-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
            onClick={() => navigate('/1/message/thread/mamas-sds')}
          >
            Message
          </button>
          <div className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3">
            Next follow-up date: 1 Nov 2022
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialistDetails;
