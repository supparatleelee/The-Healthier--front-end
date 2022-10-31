function AllVideos({
  videoTitle,
  videoPermission,
  uploadedAt,
  videoUrl,
  videoState,
  specialistVideoIdsInput,
}) {
  return (
    <>
      <div className="flex gap-3 items-center mb-5">
        <input
          type="checkbox"
          className="rounded-md"
          value={videoState.id}
          onChange={specialistVideoIdsInput}
        />
        <div className="flex gap-1">
          <video
            className="video bg-lightGrey w-[30vh] text-center mr-5"
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
      </div>

      <hr className="mb-5" />
    </>
  );
}

export default AllVideos;
