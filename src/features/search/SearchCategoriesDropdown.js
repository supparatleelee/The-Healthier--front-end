import { useEffect, useRef } from 'react';

function SearchCategoriesDropdown({ open, onClose, Ele }) {
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
    <div
      id="dropdown"
      className={` z-10 w-44 bg-white rounded-xl divide-y divide-gray-100 shadow-xl dark:bg-gray-700 absolute mt-[3rem] animate-fadeOpen ${
        open ? '' : 'hidden'
      }`}
      ref={dropdownEl}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        <li>
          <button
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Mockups
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Templates
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Design
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Logos
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SearchCategoriesDropdown;
