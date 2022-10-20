import { Link } from 'react-router-dom';
import { Package, Payment, PersonalInfo } from '../components/icons';
import AccountMenu from '../components/ui/AccountMenu';

function AccountPage() {
  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <h1 className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Account
      </h1>

      <h2 className="mt-5">
        <span className="font-medium">[user’s Name]</span>, [User’s email] |{' '}
        <Link to="#" className="underline">
          Go to your profile
        </Link>
      </h2>

      <div className="account-menus-container mt-10 flex gap-3 justify-start flex-wrap">
        <AccountMenu
          title="Personal Information"
          description="Provide personal details and health data"
        >
          <PersonalInfo />
        </AccountMenu>

        <AccountMenu
          title="Package"
          description="Review your package"
          path="/account/1/package"
        >
          <Package />
        </AccountMenu>

        <AccountMenu title="Payments" description="Review your payment">
          <Payment />
        </AccountMenu>
      </div>
    </div>
  );
}

export default AccountPage;
