import ClientDetails from '../features/clients/ClientDetails';
import ClientSessions from '../features/clients/ClientSessions';

function SessionController() {
  let isHasSessions = 1;

  return (
    <div className="mt-28 w-[75vw]">
      <div className="ml-16 mr-8 mt-32 mb-16 w-[86.6%] p-6 flex flex-col gap-5 bg-white rounded-xl shadow-allSides">
        <ClientDetails />
        <hr />
        <div className="session-controller-container">
          {isHasSessions ? (
            <>
              <ClientSessions />
              <ClientSessions />
              <ClientSessions />
            </>
          ) : (
            <div className="text-center mt-36 mb-40">
              <button className="bg-primary pt-2 pb-2 pl-10 pr-10 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
                + Assign sessions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SessionController;
