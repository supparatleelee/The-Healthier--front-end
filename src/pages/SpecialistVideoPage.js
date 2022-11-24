import { useDispatch, useSelector } from 'react-redux';
import {
  showModalDeleteVideo,
  showModalEditVideo,
  showModalUploadVideo,
} from '../reduxStore/videoSlice';
import Modal from '../components/ui/Modal';
import UploadVideoForm from '../features/CRUDVideo/UploadVideoForm';
import SearchUploadedVideos from '../features/CRUDVideo/SearchUploadedVideos';
import UploadedVideoItem from '../features/CRUDVideo/UploadedVideoItem';
import EditVideoForm from '../features/CRUDVideo/EditVideoForm';
import DeleteVideo from '../features/CRUDVideo/DeleteVideo';

function SpecialistVideoPage() {
  const state = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const videosState = useSelector((state) => state.video.allVideos);

  return (
    <>
      {videosState ? (
        <div className=" mt-28 w-[75vw]">
          <div className="ml-16 mr-8 mt-36 mb-16 w-[86.6%] flex flex-col gap-10">
            <div className="h-32 bg-white p-6 rounded-xl shadow-allSides flex justify-between items-center">
              <p>Keep uploading your video for your clients!</p>
              <button
                className="bg-primary pt-3 pb-3 pl-12 pr-12 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
                onClick={() => dispatch(showModalUploadVideo(true))}
              >
                + Upload Your Videos
              </button>
            </div>

            <SearchUploadedVideos />

            <div className="uploaded-videos-container bg-white p-10 rounded-xl shadow-allSides flex flex-col gap-8">
              {videosState.length === 0 ? (
                <p>No uploaded Video yet</p>
              ) : (
                videosState.map((item, index) => (
                  <UploadedVideoItem
                    key={index}
                    videoTitle={item.name}
                    videoPermission={item.videoStatus}
                    uploadedAt={item.createdAt}
                    videoUrl={item.videoFiles}
                    videoState={item}
                  />
                ))
              )}
            </div>
          </div>

          <Modal
            title="Upload Video"
            modalOpen={state.isUploadVideoModalOpen}
            onModalClose={() => dispatch(showModalUploadVideo(false))}
          >
            <UploadVideoForm
              onModalClose={() => dispatch(showModalUploadVideo(false))}
            />
          </Modal>

          <Modal
            title="Edit Video"
            modalOpen={state.isEditVideoModalOpen}
            onModalClose={() => dispatch(showModalEditVideo(false))}
          >
            <EditVideoForm
              onModalClose={() => dispatch(showModalEditVideo(false))}
            />
          </Modal>

          <Modal
            title="Are you sure?"
            modalOpen={state.isDeleteVideoModalOpen}
            onModalClose={() => dispatch(showModalDeleteVideo(false))}
          >
            <DeleteVideo
              onModalClose={() => dispatch(showModalDeleteVideo(false))}
            />
          </Modal>
        </div>
      ) : (
        <div className=" mt-28 w-[75vw] ">
          <div className="ml-16 mr-8 mt-36 mb-16 w-[86.6%] h-32 bg-white p-6 rounded-xl shadow-allSides flex justify-between items-center">
            <p>Start Building Your Specialist Profile</p>
            <button
              className="bg-primary pt-3 pb-3 pl-12 pr-12 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
              onClick={() => dispatch(showModalUploadVideo(true))}
            >
              + Upload Your Videos
            </button>
          </div>

          <Modal
            title="Upload Video"
            modalOpen={state.isUploadVideoModalOpen}
            onModalClose={() => dispatch(showModalUploadVideo(false))}
          >
            <UploadVideoForm />
          </Modal>
        </div>
      )}
    </>
  );
}

export default SpecialistVideoPage;
