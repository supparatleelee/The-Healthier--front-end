import { useSelector } from 'react-redux';
import SessionsContainer from '../features/specialistSessions/SessionsContainer';
import SpecialistDetails from '../features/specialistSessions/SpecialistDetails';

function SpecialistSessions() {
  const specialistsState = useSelector((state) => state.specialist);
  const selectedSpecialistIndex = specialistsState.selectedSpecialistIndex;
  const sessionState = useSelector((state) => state.session);
  const specialistInfo = sessionState.mySpecialists[selectedSpecialistIndex];

  const state = useSelector((state) => state.session);
  return (
    <div className="mt-10 mb-10 ml-[86px] mr-[100px] bg-white shadow-allSides rounded-xl">
      <SpecialistDetails
        firstName={specialistInfo.specialist.firstName}
        lastName={specialistInfo.specialist.lastName}
        area={specialistInfo.specialist.area}
        expertises={specialistInfo.specialist.Expertises}
        profileImage={specialistInfo.specialist.profileImage}
        specialistId={specialistInfo.specialist.id}
        courseDuration={specialistInfo.courseDuration}
        followupDate={specialistInfo.followUpDate}
      />
      <hr />
      <SessionsContainer />
    </div>
  );
}

export default SpecialistSessions;
