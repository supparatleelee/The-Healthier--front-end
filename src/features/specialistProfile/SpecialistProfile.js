import { useCallback, useRef, useState } from 'react';
import BookingDropDown from '../bookingSpecialists/BookingDropDown';
import Area from '../recommendedSpecialists/Area';

function SpecialistProfile({
  firstName,
  lastName,
  area,
  expertises,
  description,
  profileImage,
  specialistId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const Ele = useRef();

  return (
    <>
      <div className="bg-white shadow-allSides h-62 flex justify-between p-6 rounded-xl">
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
            {firstName + ' ' + lastName}
          </h1>
          <div className="areas flex gap-3">
            <Area area={area} />
            {expertises.map((item, index) => (
              <Area area={item.name} key={index} />
            ))}
          </div>
          <p>{description}</p>

          <div className="buttons flex gap-3">
            <button
              className="bg-primary z-[3] pt-2 pb-2 pl-16 pr-16 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:shadow-allSides"
              onClick={() => setIsOpen((prev) => !prev)}
              ref={Ele}
            >
              Book This Specialist
            </button>
            <button className="flex justify-between items-center border border-primary pt-2 pb-2 pl-[5vw] pr-[5vw] rounded-lg gap-3 font-medium">
              Message
            </button>
          </div>
        </div>
      </div>
      <BookingDropDown
        open={isOpen}
        onClose={onClose}
        Ele={Ele}
        specialistId={specialistId}
      />
    </>
  );
}

export default SpecialistProfile;
