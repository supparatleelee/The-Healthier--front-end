import SessionVideoList from './SessionVideoList';

function SessionPlaylist() {
  return (
    <div className="right-div w-[40%] h-full bg-white border rounded-xl">
      <div className="session-title font-medium p-3 flex justify-between items-center">
        <h2 className="font-medium ">Session 1</h2>
        <button className="bg-white border border-primary pt-1 pb-1 pl-10 pr-10 rounded-lg text-black hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C] hover:text-white">
          Session Complete
        </button>
      </div>

      <hr />
      <SessionVideoList />
      <SessionVideoList />
      <SessionVideoList />
      <SessionVideoList />
      <SessionVideoList />
    </div>
  );
}

export default SessionPlaylist;
