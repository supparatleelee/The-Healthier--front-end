import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  ClientsGrey,
  CommunicationGrey,
  PerformanceGrey,
  VideoWhite,
} from '../../components/icons';
import * as sessionVideoService from '../../api/sessionVideoApi';
import { getAllCustomers } from '../../reduxStore/sessionVideoSlice';

function SpecialistMenus() {
  // const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const onClick = async () => {
    const res = await sessionVideoService.getAllSessionVideo();
    dispatch(getAllCustomers(res.data.sessionVideo));
  };

  return (
    <div className="ml-[88px] pt-20 fixed">
      <ul className="text-darkGrey bg-white w-60 flex flex-col gap-3">
        <li className="text-white bg-primary pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <NavLink
            to="/specialist-view"
            className="flex gap-3"
            // style={{
            //   color: isActive ? '#fff' : '#545e6f',
            //   background: isActive ? '#DE8443' : '#fff',
            //   padding: '1rem 2.5rem 1rem 2rem',
            //   borderRadius: '0.75rem',
            // }}
          >
            <VideoWhite />
            Videos
          </NavLink>
        </li>
        <li className="pt-4 pb-4 pl-8 pr-10 rounded-xl hover:shadow-allSides">
          <NavLink
            onClick={onClick}
            to="/specialist-view/clients"
            className="flex gap-3"
            // style={({ isActive }) => ({
            //   color: isActive ? '#fff' : '#545e6f',
            //   background: isActive ? '#DE8443' : '#fff',
            //   padding: '1rem 2.5rem 1rem 2rem',
            //   borderRadius: '0.75rem',
            // })}
          >
            <ClientsGrey />
            Clients
          </NavLink>
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
