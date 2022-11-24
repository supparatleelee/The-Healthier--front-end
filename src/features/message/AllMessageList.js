import AllMessagesTitle from './AllMessagesTitle';
import MessageList from './MessageList';

function AllMessageList() {
  return (
    <div className="left-div border-r-[1px] w-[30%]">
      <AllMessagesTitle />

      <MessageList />
    </div>
  );
}

export default AllMessageList;
