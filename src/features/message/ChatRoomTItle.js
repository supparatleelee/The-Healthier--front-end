import { useSelector } from 'react-redux';

function ChatRoomTItle() {
  const userName = useSelector((state) => state.chat.currentChatUser);
  return (
    <div className="container-title">
      <h1 className="font-semibold text-[20px] pb-3 pl-8">{userName}</h1>
      <hr />
    </div>
  );
}

export default ChatRoomTItle;
