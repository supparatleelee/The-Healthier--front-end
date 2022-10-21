import SessionsContainer from '../features/specialistSessions/SessionsContainer';
import SpecialistDetails from '../features/specialistSessions/SpecialistDetails';

function SpecialistSessions() {
  return (
    <div className="mt-10 mb-10 ml-[86px] mr-[100px] bg-white shadow-allSides rounded-xl">
      <SpecialistDetails />
      <hr />
      <SessionsContainer />
    </div>
  );
}

export default SpecialistSessions;
