import { DeleteBlack, Edit } from '../../components/icons';

function VideoMenus() {
  return (
    <div className="flex items-center justify-between border border-primary rounded-xl p-6 h-10">
      <button className="pr-4 border-r-[1px] border-primary">
        <Edit />
      </button>
      <button className="pl-4">
        <DeleteBlack />
      </button>
    </div>
  );
}

export default VideoMenus;
