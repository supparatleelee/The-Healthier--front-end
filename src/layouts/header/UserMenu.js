import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountWhite, MenuWhite, PersonalInfo } from '../../components/icons';
import Modal from '../../components/ui/Modal';
import LoginForm from '../../features/auth/LoginForm';
import PersonalInformationForm from '../../features/auth/PersonalInformationForm';
import RegisterForm from '../../features/auth/RegisterForm';
import {
  showModalLogin,
  showModalRegister,
  showModalPersonalInformation,
} from '../../reduxStore/AuthSlice';
import UserMenuDropdown from './UserMenuDropdown';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const Ele = useRef();

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
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
        </div>
      </button>
      <Modal
        title="Register"
        modalOpen={state.isRegisterModalOpen}
        onModalClose={() => dispatch(showModalRegister(false))}
      >
        <RegisterForm />
      </Modal>

      <Modal
        title="Personal Information"
        modalOpen={state.isPersonalInformationModalOpen}
        onModalClose={() => dispatch(showModalPersonalInformation(false))}
      >
        <PersonalInformationForm />
      </Modal>

      <Modal
        title="Login"
        modalOpen={state.isLoginModalOpen}
        onModalClose={() => dispatch(showModalLogin(false))}
      >
        <LoginForm />
      </Modal>
      <UserMenuDropdown open={isOpen} onClose={onClose} Ele={Ele} />
    </>
  );
}

export default UserMenu;
