import Logo from '../header/Logo';
import SpecialistMenus from './SpecialistMenus';

function SideNav() {
  let isUserHasVideos = 0;

  return (
    <>
      {isUserHasVideos ? (
        <nav className=" w-[25%] pt-[6vh] shadow-allSides z-10 ">
          <Logo />
          <SpecialistMenus />
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
