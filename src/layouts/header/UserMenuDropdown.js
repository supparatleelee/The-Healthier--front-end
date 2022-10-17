import { Language } from '../../components/icons';
import { Link } from 'react-router-dom';

function UserMenuDropdown({ open, onClose }) {
  return (
    <div
      id="dropdown"
      className={` z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-xl dark:bg-gray-700 absolute mt-[12rem] ml-[5rem] p-1 ${
        open ? '' : 'hidden'
      }`}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        <li>
          <Link
            to="/"
            type="button"
            className="font-semibold inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/"
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Log In
          </Link>
        </li>

        <hr className="mb-1 mt-1" />

        <li>
          <Link
            to="/"
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Language />
            <span className="ml-2">Language - TH</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenuDropdown;
