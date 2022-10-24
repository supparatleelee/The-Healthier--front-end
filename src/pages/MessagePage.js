import AllMessageList from '../features/message/AllMessageList';
import ChatRoom from '../features/message/ChatRoom';
import { thunkChatData, thunkGetChatRoom } from '../reduxStore/ChatSlice';
import { loading } from '../reduxStore/LoadingSlice';
import socket from '../config/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSession } from '../reduxStore/SessionSlice';

function MessagePage() {
  const session = useSelector((state) => state.session);
  const myId = useSelector((state) => state?.auth?.userInfo?.id);
  const dispatch = useDispatch();
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    dispatch(thunkGetChatRoom());
    dispatch(thunkSession());
    socket.auth = { myId };

    socket.connect();
    return () => socket.disconnect();
  }, []);

  // const joinRoom = () => {
  //   const customer = session?.sessionInfo?.customerId;
  //   const specialist = session?.sessionInfo?.specialistId;
  //   const roomNumber = session?.sessionInfo?.id;
  //   if (customer || specialist) {
  //     if (roomNumber) {
  //       socket.emit('join_room', roomNumber);
  //       setShowChat(true);
  //     } else {
  //       console.log('Bad');
  //     }
  //   } else {
  //     console.log('something went wrong');
  //   }
  // };

  return (
    <div className="bg-white shadow-allSides mt-10 mb-10 ml-[86px] mr-[100px] rounded-xl flex p-6 justify-between">
      <AllMessageList />
      <ChatRoom />
    </div>
  );
}

export default MessagePage;
