import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  ClientsGrey,
  ClientsWhite,
  CommunicationGrey,
  PerformanceGrey,
  VideoGrey,
  VideoWhite,
} from '../../components/icons';
import * as sessionVideoService from '../../api/sessionVideoApi';
import { getAllCustomers } from '../../reduxStore/sessionVideoSlice';
import { useState } from 'react';

function SpecialistMenus() {
  // const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const onClick = async () => {
    const res = await sessionVideoService.getAllSessionVideo();
    dispatch(getAllCustomers(res.data.sessionVideo));
  };

  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);

  return (
    <div className="ml-[88px] pt-20 fixed">
      <ul className="text-darkGrey bg-white w-60 flex flex-col gap-3">
        <li
          className="rounded-xl hover:shadow-allSides"
          onClick={() => {
            setIcon1(true);
            setIcon2(false);
          }}
        >
          <NavLink
            to="/specialist-view/"
            className="flex gap-3"
            style={
              icon1
                ? {
                    color: '#fff',
                    background: '#DE8443',
                    padding: '1rem 2.5rem 1rem 2rem',
                    borderRadius: '0.75rem',
                  }
                : {
                    color: '#545e6f',
                    background: '#fff',
                    padding: '1rem 2.5rem 1rem 2rem',
                    borderRadius: '0.75rem',
                  }
            }
          >
            {icon1 ? <VideoWhite /> : <VideoGrey />}
            Videos
          </NavLink>
        </li>
        <li
          className="rounded-xl hover:shadow-allSides"
          onClick={() => {
            setIcon1(false);
            setIcon2(true);
          }}
        >
          <NavLink
            onClick={onClick}
            to="/specialist-view/clients"
            className="flex gap-3"
            style={
              icon2
                ? {
                    color: '#fff',
                    background: '#DE8443',
                    padding: '1rem 2.5rem 1rem 2rem',
                    borderRadius: '0.75rem',
                  }
                : {
                    color: '#545e6f',
                    background: '#fff',
                    padding: '1rem 2.5rem 1rem 2rem',
                    borderRadius: '0.75rem',
                  }
            }
          >
            {icon2 ? <ClientsWhite /> : <ClientsGrey />}
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
