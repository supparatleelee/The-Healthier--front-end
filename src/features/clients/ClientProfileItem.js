import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCurrentCustomerCourseVideos,
  setCurrentCustomer,
  setCurrentCustomerCourse,
} from '../../reduxStore/sessionVideoSlice';

function ClientProfileItem({
  firstName,
  lastName,
  profileImage,
  courseDuration,
  courseVideos,
  followUpDate,
  customerId,
  customerData,
  courseData,
}) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCurrentCustomerCourseVideos(courseVideos));
    dispatch(setCurrentCustomer(customerData));
    dispatch(setCurrentCustomerCourse(courseData));
  };

  return (
    <>
      <Link
        to={`/specialist-view/clients/${customerId}`}
        className="flex justify-between items-center"
        onClick={onClick}
      >
        <div className="flex gap-3">
          <img
            height="76px"
            width="76px"
            src={
              profileImage ||
              `https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png`
            }
            alt="profile-image"
          />
          <div className="flex flex-col gap-2 justify-around">
            <h2 className="font-semibold text-[20px]">
              {firstName} {lastName}
            </h2>
            <p className="text-darkGrey">
              {/* Course: Burn Fat |  */}
              Coure Duration: {courseDuration} days
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3">
          {courseVideos[0]
            ? `Next Follow Up Date: ${followUpDate}`
            : 'Waiting for your assignments'}
        </div>
      </Link>
      <hr />
    </>
  );
}

export default ClientProfileItem;
