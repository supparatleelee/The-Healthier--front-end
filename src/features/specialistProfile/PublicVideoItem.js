function PublicVideoItem() {
  return (
    <div className="public-video-container flex flex-col gap-2">
      <div className="video bg-lightGrey h-[20vh] w-[35vh] text-center">
        Video Mock Up
      </div>

      <h3 className="font-medium">[Video's Title]</h3>

      <p className="text-darkGrey text-[14px]">12 Oct 2022</p>
    </div>
  );
}

export default PublicVideoItem;
