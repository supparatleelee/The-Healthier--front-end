import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { GoogleLogo } from '../../components/icons';
import { thunkGooglelogin, thunkSignup } from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import { validateRegister } from '../../validations/userValidation';

function RegisterForm() {
  const dispatch = useDispatch();

  const initial = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [dataRegister, setDataRegister] = useState(initial);

  const changeInput = (e) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const registerError = validateRegister(dataRegister);

    if (registerError) {
      let [, value] = Object.entries(registerError)[0];
      return toastDisplayFailed(value);
    }

    dispatch(thunkSignup(dataRegister, () => setDataRegister(initial)));
  };

  const handleCallbackResponse = async (response) => {
    // console.log('JWT token :' + response.credential);
    const tokenId = response.credential;
    // console.log(tokenId);
    dispatch(thunkGooglelogin({ tokenId: tokenId }));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '346530911255-de4hvnvqe35a1510mrsqlas3qbp36cq0.apps.googleusercontent.com',
      // '1057761295755-tugchldrnd4theb74i8fs0h6b8b5302p.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInBtn'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div>
          <input
            id="firstName"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Firstname"
            name="firstName"
            value={dataRegister?.firstName}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="lastName"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Lastname"
            name="lastName"
            value={dataRegister?.lastName}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Email"
            name="email"
            value={dataRegister?.email}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Password"
            name="password"
            value={dataRegister?.password}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="confirmPassword"
            type="password"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={dataRegister?.confirmPassword}
            onChange={changeInput}
          />
        </div>
        <button className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white">
          Continue
        </button>
      </form>

      <p className="forget-password inline text-[14px]">
        By clicking "Continue", I agree to The Healthier's{' '}
        <span className="underline">Privacy Policy</span>.
      </p>

      <div className="flex items-center">
        <hr className="w-[45%]" />
        <p className="text-darkGrey pl-5 pr-5">or</p>
        <hr className="w-[45%]" />
      </div>

      {/* Google Button */}
      <button
        id="signInBtn"
        type="button"
        className="bg-white border text-black rounded-xl h-[6vh] flex justify-center items-center gap-5 hover:border-gray-900"
        onClick={handleCallbackResponse}
      >
        <GoogleLogo />
        Continue with Google
      </button>
    </div>
  );
}

export default RegisterForm;
