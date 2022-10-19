function UserMessageContent() {
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
          Alex Chen <span className="text-darkGrey">1:12 PM</span>
        </h2>
        <p className="text-darkGrey">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.{' '}
        </p>
      </div>
    </div>
  );
}

export default UserMessageContent;
