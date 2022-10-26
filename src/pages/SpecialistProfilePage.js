import { useSelector } from 'react-redux';
import SpecialistContainer from '../features/specialistProfile/SpecialistContainer';
import SpecialistProfile from '../features/specialistProfile/SpecialistProfile';

function SpecialistProfilePage() {
  const specialistsState = useSelector((state) => state.specialist);
  const selectedSpecialistIndex = specialistsState.selectedSpecialistIndex;
  const specialistInfo =
    specialistsState.searchedSpecialist[selectedSpecialistIndex];

  return (
    <div className="mt-10 ml-[86px] mr-[100px] mb-10 animate-fadeOpen">
      <SpecialistProfile
        firstName={specialistInfo.firstName}
        lastName={specialistInfo.lastName}
        area={specialistInfo.area}
        expertises={specialistInfo.Expertises}
        profileImage={specialistInfo.profileImage}
        description={specialistInfo.description}
        specialistId={specialistInfo.id}
      />
      <SpecialistContainer
        videos={specialistInfo.SpecialistVideos}
        id={specialistInfo.id}
      />
    </div>
  );
}

export default SpecialistProfilePage;
