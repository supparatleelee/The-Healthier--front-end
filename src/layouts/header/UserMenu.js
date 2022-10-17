import { useState } from 'react';
import { AccountWhite, MenuWhite } from '../../components/icons';
import UserMenuDropdown from './UserMenuDropdown';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="user-menu-container flex items-center"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="mr-5">Become a Specialist</span>

      <div className="bg-[#DE8443] hover:bg-gradient-to-r from-[#DE8443] to-[#B3683C] w-[100px] h-[45px] rounded-3xl flex items-center justify-center hover:shadow-lg">
        <div className="flex items-center gap-1">
          <MenuWhite />
          <AccountWhite />
        </div>
      </div>

      <UserMenuDropdown open={isOpen} onClose={() => setIsOpen(false)} />
    </button>
  );
}

export default UserMenu;
