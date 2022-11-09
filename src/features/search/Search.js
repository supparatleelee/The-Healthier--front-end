import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setPageNavigation,
  thunkGetSpecialists,
} from '../../reduxStore/SpecialistSlice';

function Search() {
  const Ele = useRef();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  console.log(search);
  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(thunkGetSpecialists(search, navigate));
    dispatch(setPageNavigation('search'));
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex ml-[24vw]" ref={Ele}>
        <div className="relative w-[500px]">
          <input
            type="search"
            id="search-dropdown"
            name="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#B3683C] focus:border-[#B3683C] dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#B3683C]"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

export default Search;
