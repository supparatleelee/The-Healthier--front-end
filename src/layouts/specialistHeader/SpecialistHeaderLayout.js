import { Outlet } from 'react-router-dom';
import SpecialistContainer from '../specialistContainer/SpecialistContainer';
import SpecialistHeader from './SpecialistHeader';

function SpecialistHeaderLayout() {
  return (
    <nav>
      <SpecialistHeader />
      <SpecialistContainer>
        <Outlet />
      </SpecialistContainer>
    </nav>
  );
}

export default SpecialistHeaderLayout;
