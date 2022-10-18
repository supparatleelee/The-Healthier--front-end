import { useCallback, useRef, useState } from 'react';
import { AccountWhite, MenuWhite } from '../../components/icons';
import UserMenuDropdown from './UserMenuDropdown';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const Ele = useRef();

  return (
    <button className="user-menu-container flex items-center">
      <span className="mr-5">Become a Specialist</span>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        ref={Ele}
        className="bg-[#DE8443] hover:bg-gradient-to-r from-[#DE8443] to-[#B3683C] w-[100px] h-[45px] rounded-3xl flex items-center justify-center hover:shadow-lg"
      >
        <div className="flex items-center gap-1">
          <MenuWhite />
          <AccountWhite />
        </div>
        <UserMenuDropdown open={isOpen} onClose={onClose} Ele={Ele} />
      </div>
    </button>
  );
}

export default UserMenu;
