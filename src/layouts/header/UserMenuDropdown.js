import { Language } from '../../components/icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showModalLogin, showModalRegister } from '../../reduxStore/AuthSlice';

function UserMenuDropdown({ open, onClose, Ele }) {
  const dispatch = useDispatch();

  const dropdownEl = useRef();

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

  return (
    <>
      <div
        id="dropdown"
        className={`animate-fadeOpen z-10 w-44 bg-white rounded-xl divide-y divide-gray-100 shadow-xl dark:bg-gray-700 absolute mt-[12rem] ml-[72.6rem] p-1 ${
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
              type="button"
              className="font-semibold inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => dispatch(showModalRegister(true))}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => dispatch(showModalLogin(true))}
            >
              Log In
            </Link>
          </li>

          <hr className="mb-1 mt-1" />

          <li>
            <Link
              to="/"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Language />
              <span className="ml-2">Language - TH</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserMenuDropdown;
