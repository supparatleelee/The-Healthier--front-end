import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CourseDurationForm from './CourseDurationForm';
import CourseDuration from './CourseDurationForm';

function BookingDropDown({ open, onClose, Ele, specialistId }) {
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
      className={`animate-fadeOpen absolute left-[24.5vw] top-[46vh] z-10 w-[34.5vh] bg-white rounded-xl divide-gray-100 dark:bg-gray-700 p-6 shadow-allSides ${
        open ? '' : 'hidden'
      }`}
      ref={dropdownEl}
      onClick={(e) => e.stopPropagation()}
    >
      <CourseDurationForm specialistId={specialistId} />
    </div>
  );
}

export default BookingDropDown;
