function SearchClients() {
  return (
    <form>
      <div className="flex">
        <button
          id="dropdown-button"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          Newest
          <svg
            aria-hidden="true"
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="relative w-[400px]">
          <input
            type="search"
            id="search-dropdown"
            name="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-[#B3683C] focus:border-[#B3683C] dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#B3683C]"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="w-[15%] absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#DE8443] rounded-r-lg border border-[#DE8443] hover:bg-[#B3683C] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#DE8443] dark:hover:bg-[#B3683C] dark:focus:ring-[#B3683C]"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 m-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchClients;
