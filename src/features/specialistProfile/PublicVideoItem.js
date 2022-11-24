function PublicVideoItem({ videoTitle, uploadedAt, video }) {
  return (
    <div className="public-video-container flex flex-col gap-2">
      <video
        className="video bg-lightGrey h-[20vh] w-[35vh] text-center"
        controls="controls"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="font-medium">{videoTitle}</h3>

      <p className="text-darkGrey text-[14px]">{uploadedAt}</p>
    </div>
  );
}

export default PublicVideoItem;
