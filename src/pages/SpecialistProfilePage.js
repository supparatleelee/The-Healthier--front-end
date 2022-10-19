import SpecialistContainer from '../features/specialistProfile/SpecialistContainer';
import SpecialistProfile from '../features/specialistProfile/SpecialistProfile';

function SpecialistProfilePage() {
  return (
    <div className="mt-10 ml-[86px] mr-[100px] mb-10 animate-fadeOpen">
      <SpecialistProfile />
      <SpecialistContainer />
    </div>
  );
}

export default SpecialistProfilePage;
