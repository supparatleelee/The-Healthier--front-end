import ChatRoomContent from './ChatRoomContent';
import ChatRoomTItle from './ChatRoomTItle';

function ChatRoom() {
  return (
    <div className="right-div w-[70%]">
      <ChatRoomTItle />
      <ChatRoomContent />
    </div>
  );
}

export default ChatRoom;
