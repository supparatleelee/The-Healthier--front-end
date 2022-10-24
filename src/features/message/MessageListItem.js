import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRoom, thunkChatData } from '../../reduxStore/ChatSlice';
import Chat from '../chat/Chat';

function MessageListItem({ item }) {
  const { user1, user2, Chats } = item;
  const userId = useSelector((state) => state.auth.userInfo.id);
  const myName = useSelector((state) => state.auth.userInfo.firstName);
  const friends = userId === user1.id ? user2 : user1;
  const sender = +Chats?.[0]?.sender === +userId ? myName : friends?.firstName;
  const dispatch = useDispatch();

  const handleChatSwap = (e) => {
    dispatch(thunkChatData());
  };

  console.log(friends);

  return (
    <div className="list-item-container flex gap-3 justify-between items-center pr-6 h-20">
      <div className="left-div">
        <img
          height="80px"
          width="80px"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
          alt="profile-image"
        />
      </div>

      <Link
        to={`/chat/${friends?.id}`}
        className="right-div w-full"
        onClick={handleChatSwap}
      >
        <div className="flex justify-between">
          <h2 className="font-semibold">{friends.firstName}</h2>
          <p className="text-darkGrey"></p>
        </div>

        <p className="text-darkGrey">{`${
          Chats?.[0]?.message ? `${sender}:${Chats?.[0]?.message}` : ''
        }`}</p>
      </Link>
    </div>
  );
}

export default MessageListItem;
