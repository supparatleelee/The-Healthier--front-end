import { thunkBooking } from '../../reduxStore/BookingSlice';
import { useDispatch } from 'react-redux';

function CourseDurationForm({ specialistId }) {
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    for (let key in formProps) {
      if (formProps.hasOwnProperty(key)) {
        dispatch(thunkBooking(specialistId, formProps[key]));
      }
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <p>Choose course’s duration:</p>

      <label htmlFor="7-days">
        <input
          type="checkbox"
          name="7-days"
          value="7"
          className="border border-gray-400 rounded-md"
        />
        <span className="ml-2">7 Days</span>
      </label>
      <label htmlFor="15-days">
        <input
          type="checkbox"
          name="15-days"
          value="15"
          className="border border-gray-400 rounded-md"
        />
        <span className="ml-2">15 Days</span>
      </label>
      <label htmlFor="30-days">
        <input
          type="checkbox"
          name="30-days"
          value="30"
          className="border border-gray-400 rounded-md"
        />
        <span className="ml-2">30 Days</span>
      </label>

      <button
        type="submit"
        className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
      >
        Book
      </button>
    </form>
  );
}

export default CourseDurationForm;
