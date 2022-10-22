import { Link } from 'react-router-dom';

function ClientProfileItem() {
  return (
    <>
      <Link
        to="/specialist-view/clients/2"
        className="flex justify-between items-center"
      >
        <div className="flex gap-3">
          <img
            height="76px"
            width="76px"
            src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
            alt="profile-image"
          />
          <div className="flex flex-col gap-2 justify-around">
            <h2 className="font-semibold text-[20px]">Hosni Zao</h2>
            <p className="text-darkGrey">
              Course: Burn Fat | Coure Duration: 30 days
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border border-primary pt-2 pb-2 pl-10 pr-10 rounded-lg gap-3">
          Waiting for your assignments
        </div>
      </Link>
      <hr />
    </>
  );
}

export default ClientProfileItem;
