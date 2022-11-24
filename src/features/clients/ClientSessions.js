import { useDispatch, useSelector } from 'react-redux';
import AssignVideosForm from './AssignVideosForm';
import VideoForClient from './VideoForClient';
import ExpertiseModal from '../../components/ui/ExpertiseModal';
import { showModalAssignVideos } from '../../reduxStore/sessionVideoSlice';

function ClientSessions() {
  const dispatch = useDispatch();
  const isAssigned = useSelector(
    (state) => state.sessionVideo.currentCustomerCourseVideos
  );
  const state = useSelector(
    (state) => state.sessionVideo.isModalAssignVideosOpen
  );
  const courseData = useSelector(
    (state) => state.sessionVideo.currentCustomerCourse
  );

  return (
    <div className="session-section">
      <div className="session-videos pt-5 pb-5">
        {isAssigned[0] ? (
          <>
            {isAssigned.map((item, index) => (
              <VideoForClient
                key={index}
                title={item.name}
                video={item.videoFiles}
                uploadedAt={item.createdAt}
              />
            ))}
            <div className="session-menus mt-5 mb-5 flex gap-3">
              <button className="bg-white border border-primary pt-2 pb-2 pl-16 pr-16 rounded-lg text-black font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:text-white">
                Edit This Course Video(s)
              </button>
              {/* <button className="bg-white border border-danger text-danger pt-2 pb-2 pl-16 pr-16 rounded-lg font-medium hover:bg-danger hover:text-white">
                Delete This Sessions
              </button> */}
            </div>
          </>
        ) : (
          <div className="text-center mt-16 mb-16">
            <button
              className="bg-primary pt-3 pb-3 pl-10 pr-10 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
              onClick={() => dispatch(showModalAssignVideos(true))}
            >
              + Assign Video(s) for This Course
            </button>
          </div>
        )}
      </div>

      <ExpertiseModal
        title="Assign Videos"
        modalOpen={state}
        onModalClose={() => dispatch(showModalAssignVideos(false))}
      >
        <AssignVideosForm sessionId={courseData.id} />
      </ExpertiseModal>
    </div>
  );
}

export default ClientSessions;
