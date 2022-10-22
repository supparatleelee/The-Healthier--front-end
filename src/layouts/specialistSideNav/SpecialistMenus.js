import { Link } from 'react-router-dom';
import {
  ClientsGrey,
  CommunicationGrey,
  PerformanceGrey,
  VideoWhite,
} from '../../components/icons';

function SpecialistMenus() {
  return (
    <div className="ml-[88px] pt-10 fixed">
      <ul className="text-darkGrey bg-white w-60 flex flex-col gap-3">
        <li className="text-white bg-primary pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <Link to="/specialist-view" className="flex gap-3">
            <VideoWhite />
            Videos
          </Link>
        </li>
        <li className="pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <Link to="/specialist-view/clients" className="flex gap-3">
            <ClientsGrey />
            Clients
          </Link>
        </li>
        <li className="pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <Link className="flex gap-3">
            <CommunicationGrey />
            Communication
          </Link>
        </li>
        <li className="pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <Link className="flex gap-3">
            <PerformanceGrey />
            Performance
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SpecialistMenus;
