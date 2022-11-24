import { Children } from 'react';
import { useSelector } from 'react-redux';

function UserMessageContent({ item }) {
  const state = useSelector((state) => state.chat);
  const user = useSelector((state) => state.auth.userInfo);
  const userId = useSelector((state) => state.auth.userInfo.id);

  return (
    <div className="list-item-container flex gap-3 justify-between items-center">
      <div className="left-div">
        <img
          height="76px"
          width="76px"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
          alt="profile-image"
        />
      </div>
      <div className="right-div w-full h-full pt-3 pb-3 flex flex-col justify-center gap-2">
        <h2 className="font-semibold">
          {/* {state.currentChatUser}{' '} */}

          {userId == item.sender ? user.firstName : state.currentChatUser}
          <span className="text-darkGrey">
            {/* {state.chatData.chat[0].createdAt} */}
            {item.createdAt}
          </span>
        </h2>
        <p className="text-darkGrey">
          {/* {state.chatData.chat[0].Chats[0].message} */}
          {item.message}
        </p>
      </div>
    </div>
  );
}

export default UserMessageContent;
