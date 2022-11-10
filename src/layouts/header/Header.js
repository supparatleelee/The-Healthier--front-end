import Search from '../../features/search/Search';
import AuthUserMenu from './AuthUserMenu';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

function Header() {
  const state = useSelector((state) => state.auth);
  const user = state.userInfo;

  return (
    <>
      <nav className="z-10 bg-white h-28 bg-opacity-20 w-screen backdrop-blur-xl fixed flex justify-between items-center pr-[100px] pt-4 shadow-lg">
        <Logo />
        <Search />
        {user?.id ? <AuthUserMenu /> : <UserMenu />}
      </nav>
    </>
  );
}

export default Header;
