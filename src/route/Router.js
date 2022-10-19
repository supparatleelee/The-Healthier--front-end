import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HeaderLayout from '../layouts/header/HeaderLayout';
import LandingPage from '../pages/LandingPage';

function Router() {
  const state = useSelector((state) => state.auth);
  const user = state.userInfo;
  // const user = 0;

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
