import { useState } from 'react';
import {
  ExclamationDanger,
  ToggleHeadingDown,
  ToggleHeadingRight,
} from '../../components/icons';
import VideoForClient from './VideoForClient';

function ClientSessions() {
  const [isOpen, setIsOpen] = useState(false);

  let isAssigned = 0;

  return (
    <div className="session-section">
      <div
        className="session-title flex gap-3 items-center mb-5 font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <ToggleHeadingDown /> : <ToggleHeadingRight />}
        {isAssigned ? (
          <>
            Session 1
            <ExclamationDanger />
          </>
        ) : (
          'Session 1'
        )}
      </div>

      <hr />

      {isOpen && (
        <>
          <div className="session-videos pt-5 pb-5">
            {isAssigned ? (
              <>
                <VideoForClient />
                <VideoForClient />
                <VideoForClient />
              </>
            ) : (
              <div className="text-center mt-16 mb-16">
                <button className="bg-primary pt-2 pb-2 pl-10 pr-10 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
                  + Assign sessions 1
                </button>
              </div>
            )}
          </div>
          <hr />
          {isAssigned ? (
            <div className="session-menus mt-5 mb-5 flex gap-3">
              <button className="bg-white border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-black font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:text-white">
                Edit This Session
              </button>
              <button className="bg-white border border-danger text-danger pt-2 pb-2 pl-16 pr-16 rounded-lg font-medium hover:bg-danger hover:text-white">
                Delete This Sessions
              </button>
            </div>
          ) : (
            ''
          )}
        </>
      )}

      <hr className="mb-5" />
    </div>
  );
}

export default ClientSessions;
