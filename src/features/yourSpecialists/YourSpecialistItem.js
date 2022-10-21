import { Link } from 'react-router-dom';
import Area from '../recommendedSpecialists/Area';

function YourSpecialistItem() {
  return (
    <div className="bg-white w-[49%] rounded-xl shadow-2xl mb-3 p-8">
      <div className="specialist-details flex gap-3 w-full">
        <div className="left-div flex rounded-xl gap-5">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/waniga/image/upload/v1666025303/Rectangle_45_fbqnqi.png"
            alt="Specialist-Profile"
          />
        </div>

        <div className="right-div flex flex-col gap-5 w-[70%]">
          <h1 className="font-semibold">Alex Samethan</h1>
          <div className="areas flex gap-3">
            <Area />
            <Area />
            <Area />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="buttons flex gap-3 mt-5">
        <button className="bg-primary pt-2 pb-2 pl-24 pr-24 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
          <Link to="/specialist/1/sessions">See Your Sessions</Link>
        </button>
        <button className="flex justify-between items-center border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg gap-3 font-medium">
          Message
        </button>
      </div>
    </div>
  );
}

export default YourSpecialistItem;
