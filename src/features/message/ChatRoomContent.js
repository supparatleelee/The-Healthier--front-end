import UserMessageContent from './UserMessageContent';

function ChatRoomContent() {
  return (
    <div className="p-6 flex flex-col gap-5">
      <p className="text-darkGrey text-center">19 OCT 2022</p>

      <div className="flex flex-col gap-3">
        <UserMessageContent />
        <UserMessageContent />
        <UserMessageContent />
        <UserMessageContent />
      </div>

      <form className="message-input flex flex-col gap-3">
        <textarea
          id="chat-input"
          className="rounded-xl w-full border-none bg-gray-100 text-start p-6"
          placeholder="Write your message here..."
          name="chat-input"
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
