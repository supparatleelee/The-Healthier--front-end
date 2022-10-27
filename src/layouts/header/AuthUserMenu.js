import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MenuWhite } from '../../components/icons';
import AuthUserMenuDropDown from './AuthUserMenuDropDown';
import { thunkGetVideos } from '../../reduxStore/videoSlice';

function AuthUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const Ele = useRef();

  const navigate = useNavigate();

  const userRole = useSelector((state) => state.auth.userInfo.role);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (userRole === 'Specialist') {
      navigate('/specialist-view');
      dispatch(thunkGetVideos());
    }
    if (userRole === 'Customer') {
      navigate('/become-a-specialist');
    }
  };

  return (
    <div>
      <button className="user-menu-container flex items-center">
        <span className="mr-5" onClick={handleOnClick}>
          {userRole === 'Specialist'
            ? 'Specialist Mode'
            : 'Become a Specialist'}
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
      <AuthUserMenuDropDown open={isOpen} onClose={onClose} Ele={Ele} />
    </div>
  );
}

export default AuthUserMenu;
