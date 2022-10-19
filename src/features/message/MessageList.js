import MessageListItem from './MessageListItem';

function MessageList() {
  return (
    <div className="flex flex-col justify-between gap-3 mt-3">
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
    </div>
  );
}

export default MessageList;
