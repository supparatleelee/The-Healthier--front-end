import { useDispatch, useSelector } from 'react-redux';
import UserMessageContent from './UserMessageContent';
import socket from '../../config/socket';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { thunkChatData } from '../../reduxStore/ChatSlice';
import * as chatService from '../../api/chatApi';

function ChatRoomContent() {
  const chat = useSelector((state) => state.chat);
  const userMessageData = useSelector((state) => state.chat.chatData);
  const myId = useSelector((state) => state.auth.userInfo.id);

  const [allMessage, setAllMessage] = useState([]);
  const [recentMessagep, setRecentMessage] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(userMessageData);
  console.log(chat, '====================');

  useEffect(() => {
    dispatch(
      thunkChatData(id, (allMessage) => setAllMessage((p) => allMessage))
    );
    socket.on('receiveMessage', (newMessage) => {
      console.log(newMessage?.sender, 'hello', id);
      if (+newMessage?.sender === +id) setAllMessage((p) => [...p, newMessage]);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setRecentMessage((p) => e.target.value);
    const newMessage = {
      chatRoomId: chat.currentChatRoom,
      message: recentMessagep,
      sender: myId,
      receiver: id,
    };
    socket.emit('sendMessage', newMessage);
    setAllMessage((p) => [...p, newMessage]);
    await chatService.createMessage(newMessage);
    setRecentMessage('');
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      {/* <p className="text-darkGrey text-center">19 OCT 2022</p> */}

      <div className="flex flex-col gap-3">
        {allMessage.map((item, index) => (
          <UserMessageContent key={index} item={item} />
        ))}
      </div>

      <form
        className="message-input flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="chat-input"
          className="rounded-xl w-full border-none bg-gray-100 text-start p-6"
          placeholder="Write your message here..."
          name="chat-input"
          value={recentMessagep}
          onChange={(e) => setRecentMessage((p) => e.target.value)}
          required
        />

        <button
          type="submit"
          className=" text-white rounded-xl bg-primary border border-primary hover:border hover:border-primary hover:bg-white hover:text-black pt-2 pb-2 pl-10 pr-10 w-36"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoomContent;
