import VideoMenus from './VideoMenus';

function UploadedVideoItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1">
        <div className="video bg-lightGrey h-[18vh] w-[30vh] text-center mr-5">
          Video Mock Up
        </div>
        <div className="flex flex-col gap-2 justify-around">
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-[20px]">Wram Up 01</h3>
            <h4 className="font-medium text-darkGrey text-[18px]">Public</h4>
          </div>
          <p className="text-darkGrey">12 Oct 2022</p>
        </div>
      </div>
      <VideoMenus />
    </div>
  );
}

export default UploadedVideoItem;
