import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuWhite } from '../../components/icons';
import SpecialistUserMenuDropDown from './SpecialistUserMenuDropDown';

function SpecialistUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const Ele = useRef();

  const navigate = useNavigate();

  return (
    <div>
      <button className="user-menu-container flex items-center">
        <span className="mr-5" onClick={() => navigate('/')}>
          Switch to the Regular User view
        </span>

        <div
          onClick={() => setIsOpen((prev) => !prev)}
          ref={Ele}
          className="bg-[#DE8443] hover:bg-gradient-to-r from-[#DE8443] to-[#B3683C] w-[100px] h-[45px] rounded-3xl flex items-center justify-center hover:shadow-lg"
        >
          <div className="flex items-center gap-1">
            <MenuWhite />
            <img
              height="28px"
              width="28px"
              src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
              alt="profile-img"
            />
          </div>
        </div>
      </button>
      <SpecialistUserMenuDropDown open={isOpen} onClose={onClose} Ele={Ele} />
    </div>
  );
}

export default SpecialistUserMenu;
