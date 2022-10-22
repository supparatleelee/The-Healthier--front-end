import Logo from '../header/Logo';
import SpecialistMenus from './SpecialistMenus';

function SideNav() {
  let isUserHasVideos = 0; // mockup
  let isAssignedPage = 0; // mockup - should not write like this,

  return (
    <>
      {isUserHasVideos || isAssignedPage ? (
        <nav className=" w-[25%] pt-[6vh] shadow-allSides z-10 ">
          <Logo />
          <div className="w-[25%] h-screen z-0">
            <SpecialistMenus />
          </div>
        </nav>
      ) : (
        <nav className=" w-[25%] pt-[6vh] shadow-allSides z-10 h-screen">
          <Logo />
          <SpecialistMenus />
        </nav>
      )}
    </>
  );
}

export default SideNav;
