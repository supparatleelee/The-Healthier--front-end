import ClientDetails from '../features/clients/ClientDetails';
import ClientSessions from '../features/clients/ClientSessions';

function SessionController() {
  return (
    <div className="mt-28 w-[75vw]">
      <div className="ml-16 mr-8 mt-32 mb-16 w-[86.6%] p-6 flex flex-col gap-5 bg-white rounded-xl shadow-allSides">
        <ClientDetails />
        <hr />
        <div className="session-controller-container">
          <ClientSessions />
        </div>
      </div>
    </div>
  );
}

export default SessionController;
