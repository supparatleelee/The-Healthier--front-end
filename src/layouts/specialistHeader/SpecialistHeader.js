import SpecialistUserMenu from './SpecialistUserMenu';

function SpecialistHeader() {
  return (
    <nav className="fixed h-28 flex items-center w-screen pt-4 pr-[100px] bg-[#F4F4F4] pl-[45%] z-[20] bg-opacity-20 backdrop-blur-xl">
      <div>
        <SpecialistUserMenu />
      </div>
    </nav>
  );
}

export default SpecialistHeader;
