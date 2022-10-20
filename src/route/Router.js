import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HeaderLayout from '../layouts/header/HeaderLayout';
import ChatPage from '../pages/ChatPage';
import LandingPage from '../pages/LandingPage';

function Router() {
  let user = 0;

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
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
