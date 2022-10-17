function SearchCategoriesDropdown({ open, onClose }) {
  return (
    <div
      id="dropdown"
      className={` z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-xl dark:bg-gray-700 absolute mt-[2.7rem] ${
        open ? '' : 'hidden'
      }`}
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
