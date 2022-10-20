import { Logout } from '../../components/icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { loading } from '../../reduxStore/LoadingSlice';
import { removeAccessToken } from '../../utils/localStorage';
import { showUser } from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';

function AuthUserMenuDropDown({ open, onClose, Ele }) {
  const dropdownEl = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        if (!Ele.current.contains(e.target)) {
          onClose();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose, Ele]);

  const handleLogout = () => {
    try {
      dispatch(loading(true));
      removeAccessToken();
      dispatch(showUser({}));
    } catch (error) {
      toastDisplayFailed(error?.response?.data?.message);
    } finally {
      dispatch(loading(false));
    }
  };

  return (
    <div
      id="dropdown"
      className={`animate-fadeOpen z-10 w-44 bg-white rounded-xl divide-y divide-gray-100 shadow-xl dark:bg-gray-700 absolute mt-[0.2rem] ml-[5.5rem] p-1 ${
        open ? '' : 'hidden'
      }`}
      ref={dropdownEl}
      onClick={(e) => e.stopPropagation()}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        <li>
          <Link
            to="/account/1"
            type="button"
            className="font-semibold inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/account/1/your-specialists"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            My Specialists
          </Link>
        </li>
        <li>
          <Link className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Notifications
          </Link>
        </li>
        <li>
          <Link
            to="/1/message/thread/C-tasz2s"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Messages
          </Link>
        </li>

        <hr className="mb-1 mt-1" />

        <li>
          <Link
            to="/"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Logout />
            <span className="ml-2" onClick={handleLogout}>
              Log Out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AuthUserMenuDropDown;
