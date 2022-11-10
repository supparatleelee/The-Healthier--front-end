import VideoMenus from './VideoMenus';

function UploadedVideoItem({
  videoTitle,
  videoPermission,
  uploadedAt,
  videoUrl,
  videoState,
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1">
        <video
          className="video bg-lightGrey h-[18vh] text-center mr-5"
          controls="controls"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col gap-2 justify-around">
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-[20px]">{videoTitle}</h3>
            <h4 className="font-medium text-darkGrey text-[18px]">
              {videoPermission}
            </h4>
          </div>
          <p className="text-darkGrey">{uploadedAt}</p>
        </div>
      </div>
      <VideoMenus videoState={videoState} />
    </div>
  );
}

export default UploadedVideoItem;
