import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from '../container/Container';

function HeaderLayout() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default HeaderLayout;
