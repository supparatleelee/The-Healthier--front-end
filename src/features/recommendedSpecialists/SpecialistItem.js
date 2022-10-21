import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CancleDark } from '../../components/icons';
import Area from './Area';

function SpecialistItem({ firstName, lastName, description, area }) {
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
          <h1 className="font-semibold">{firstName + ' ' + lastName}</h1>
          <div className="areas flex gap-3">
            {/* {area.map((item, index) => {
              <Area key={index} area={item} />;
            })} */}
            <Area area={area} />
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div className="buttons flex gap-3 mt-5">
        <button className="bg-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
          <Link to="/specialists/1">See This Specialist Profile</Link>
        </button>
        <button className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3 font-medium">
          <CancleDark />
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default SpecialistItem;
