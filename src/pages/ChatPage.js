import socket from '../config/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSession } from '../reduxStore/SessionSlice';
import Chat from '../features/chat/Chat';

function ChatPage() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.auth.userInfo.id);
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState('');
  // const [sessionRoom, setSessionRoom] = useState();
  // const [customer, setCustomer] = useState();
  // const [specialist, setSpecialist] = useState();

  useEffect(() => {
    // socket.auth = { myId };
    // socket.connect();
    // dispatch(thunkSession());
    // // setCustomer(session?.sessionInfo?.customerId);
    // // setSpecialist(session?.seesionInfo?.specialistId);
    // // setSessionRoom(session?.sessionInfo?.id);
    // return () => socket.disconnect();
  }, []);

  // console.log(session);
  // console.log(customer);
  // console.log(specialist);
  // console.log(sessionRoom);

  // console.log(session.sessionInfo.id, 'test');
  // console.log(session.sessionInfo.specialistId, 'specialist');
  // console.log(session.sessionInfo.id);

  const joinRoom = () => {
    const customer = session?.sessionInfo?.customerId;
    const specialist = session?.sessionInfo?.specialistId;
    const roomNumber = session?.sessionInfo?.id;
    if (customer || specialist) {
      if (roomNumber) {
        socket.emit('join_room', roomNumber);
        setShowChat(true);
      } else {
        console.log('Bad');
      }
    } else {
      console.log('something went wrong');
    }
  };

  return (
    <div className="flex justify-center pt-52 top-0 left-0 bottom-0 right-0">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat
          socket={socket}
          room={session?.sessionInfo?.id}
          username={username}
        />
      )}
    </div>
  );
}

export default ChatPage;
