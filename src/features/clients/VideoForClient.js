function VideoForClient({ title, video, uploadedAt }) {
  return (
    <div className="flex mb-5">
      <video
        className="video bg-lightGrey w-[22vw] text-center mr-5"
        controls="controls"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="right-div">
        <h3 className="font-medium">{title}</h3>

        <p className="text-darkGrey text-[14px]">{uploadedAt}</p>
      </div>
    </div>
  );
}

export default VideoForClient;
