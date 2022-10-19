function MessageListItem() {
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

      <div className="right-div w-full">
        <div className="flex justify-between">
          <h2 className="font-semibold">Alex Chen</h2>
          <p className="text-darkGrey">1:12 PM</p>
        </div>

        <p className="text-darkGrey">Alex: It's my pleasure</p>
      </div>
    </div>
  );
}

export default MessageListItem;
