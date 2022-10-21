import { ToggleHeadingDown, ToggleHeadingRight } from '../../components/icons';
import { useState } from 'react';
import SessionVideo from './SessionVideo';

function Session() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="session-section">
      <div
        className="session-title flex gap-3 items-center mb-5 font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <ToggleHeadingDown /> : <ToggleHeadingRight />}
        Session 1
      </div>

      <hr />

      {isOpen && (
        <>
          <div className="session-videos pt-5 pb-5">
            <SessionVideo />
            <SessionVideo />
            <SessionVideo />
          </div>
          <hr />
          <div className="session-menus mt-5 mb-5">
            <button className="bg-white border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-black font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:text-white">
              Session Complete
            </button>
          </div>
        </>
      )}

      <hr className="mb-5" />
    </div>
  );
}

export default Session;
