import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageListItem from './MessageListItem';

function MessageList() {
  const state = useSelector((state) => state.chat);
  const user = useSelector((state) => state.auth.userInfo);
  const userId = useSelector((state) => state.auth.userInfo.id);
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.chat.roomId);

  console.log(state.chatData);

  return (
    <div className="flex flex-col justify-between gap-3 mt-3">
      {roomId?.map?.((item, index) => (
        <MessageListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MessageList;
