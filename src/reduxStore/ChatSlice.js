import { createSlice } from '@reduxjs/toolkit';
import * as chatService from '../api/chatApi';
import { loading } from './LoadingSlice';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatData: [],
    userChat: [],
    currentChatRoom: '',
    currentChatUser: '',
    roomId: '',
  },
  reducers: {
    getUser: (state, action) => {},
    getChat: (state, action) => {
      state.chatData = action.payload.chatData.chat.Chats;
      state.currentChatUser = action.payload.chatData.secondUserName;
      state.userChat = action.payload.chatData.userName;
      state.currentChatRoom = action.payload.chatData.chat.id;
    },
    getRoom: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

const { getUser, getChat, getRoom } = chatSlice.actions;

export const thunkChatData = (friendId, setAllMessage) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const getChatData = await chatService.getChat(friendId);
    console.log(getChatData.data);
    dispatch(getChat({ chatData: getChatData.data }));
    setAllMessage(getChatData?.data?.chat?.Chats);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loading(false));
  }
};
export const thunkGetChatRoom = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const roomData = await chatService.getRoomApi();

    dispatch(getRoom(roomData.data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loading(false));
  }
};

export const thunkCreateChatRoom = (id) => async (dispatch) => {
  try {
    const res = await chatService.createChatRoom(+id);
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export default chatSlice.reducer;
export { getChat, getUser, getRoom };
