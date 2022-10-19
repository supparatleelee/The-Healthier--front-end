import AllMessageList from '../features/message/AllMessageList';
import ChatRoom from '../features/message/ChatRoom';

function MessagePage() {
  return (
    <div className="bg-white shadow-allSides mt-10 mb-10 ml-[86px] mr-[100px] rounded-xl flex p-6 justify-between">
      <AllMessageList />
      <ChatRoom />
    </div>
  );
}

export default MessagePage;
