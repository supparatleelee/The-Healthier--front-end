import { useNavigate } from 'react-router-dom';

function AccountMenu({ children, title, description, path }) {
  const navigate = useNavigate();

  return (
    <button
      className="account-menu-1 p-8 rounded-xl shadow-xl flex flex-col gap-3 w-[32.6%] hover:shadow-allSides"
      onClick={() => navigate(path)}
    >
      {children}
      <h3 className="font-semibold mt-5">{title}</h3>
      <p className="text-darkGrey font-medium">{description}</p>
    </button>
  );
}

export default AccountMenu;
