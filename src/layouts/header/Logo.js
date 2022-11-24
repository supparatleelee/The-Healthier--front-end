import { Link } from 'react-router-dom';
import logo from '../../assets/images/the-healthier-logo.png';

function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        width="300"
        height="110"
        className="pl-[60px] fixed top-12"
      />
    </Link>
  );
}

export default Logo;
