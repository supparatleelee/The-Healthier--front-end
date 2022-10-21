import SessionPlaylist from '../features/sessionPlaylist/SessionPlaylist';
import SessionVideo from '../features/sessionPlaylist/SessionVideo';

function SessionPlaylistPage() {
  return (
    <div className="mt-10 mb-10 ml-[86px] mr-[100px] flex gap-8">
      <SessionVideo />
      <SessionPlaylist />
    </div>
  );
}

export default SessionPlaylistPage;
