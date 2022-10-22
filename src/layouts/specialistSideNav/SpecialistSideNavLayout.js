import { Outlet } from 'react-router-dom';
import SpecialistContainer from '../specialistContainer/SpecialistContainer';
import SideNav from './SideNav';

function SpecialistSideNavLayout() {
  return (
    <div className="flex">
      <SideNav />
      <SpecialistContainer>
        <Outlet />
      </SpecialistContainer>
    </div>
  );
}

export default SpecialistSideNavLayout;
