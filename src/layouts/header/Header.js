import Search from '../../features/search/Search';
import Logo from './Logo';
import UserMenu from './UserMenu';

function Header() {
  return (
    <>
      <nav className="bg-white h-28 bg-opacity-20 w-screen backdrop-blur-xl fixed flex justify-between items-center pl-8 pr-20 pt-4 shadow-lg">
        <Logo />
        <Search />
        <UserMenu />
      </nav>
    </>
  );
}

export default Header;
