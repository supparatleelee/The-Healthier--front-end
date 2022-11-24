import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ClientDetails() {
  const { firstName, lastName, profileImage } = useSelector(
    (state) => state.sessionVideo.currentCustomer
  );
  const {
    courseDuration,
    SpecialistVideos: courseVideos,
    followUpDate,
  } = useSelector((state) => state.sessionVideo.currentCustomerCourse);

  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-3">
        <img
          className="w-[150px] h-[150px]"
          src={
            profileImage ||
            'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
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

          <div className="buttons flex gap-3">
            <button className="bg-primary pt-2 pb-2 pl-10 pr-10 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
              See {firstName}’s Health Info
            </button>
            <Link to="/2/message/thread/12ks-wer">
              <button className="border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg">
                Message
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border border-lightGrey pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3 mt-2">
        {courseVideos[0]
          ? `Next Follow Up Date: ${followUpDate}`
          : 'Waiting for your assignments'}
      </div>
    </div>
  );
}

export default ClientDetails;
