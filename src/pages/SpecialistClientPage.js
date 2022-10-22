import ClientProfileItem from '../features/clients/ClientProfileItem';
import SearchClients from '../features/clients/SearchClients';

function SpecialistClientPage() {
  return (
    <div className="mt-28 w-[75vw]">
      <div className="ml-16 mr-8 mt-32 mb-16 w-[86.6%] flex flex-col gap-10">
        <SearchClients />

        <div className=" bg-white p-10 rounded-xl shadow-allSides flex flex-col gap-8">
          <ClientProfileItem />
          <ClientProfileItem />
          <ClientProfileItem />
        </div>
      </div>
    </div>
  );
}

export default SpecialistClientPage;
