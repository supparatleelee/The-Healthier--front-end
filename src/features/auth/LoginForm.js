import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogo } from '../../components/icons';
import { thunkGooglelogin, thunkLogin } from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import { validateLogin } from '../../validations/userValidation';

function LoginForm() {
  const dispatch = useDispatch();

  const initial = {
    email: '',
    password: '',
  };
  const [dataLogin, setDataLogin] = useState(initial);

  const changeInput = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const loginError = validateLogin(dataLogin);

    if (loginError) {
      let [key, value] = Object.entries(loginError)[0];
      return toastDisplayFailed(value);
    }

    dispatch(
      thunkLogin({ email: dataLogin.email, password: dataLogin.password }, () =>
        setDataLogin(initial)
      )
    );
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
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInBtn'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitLogin}>
        <div>
          <input
            id="email"
            type="email"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Email"
            name="email"
            value={dataLogin?.email}
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
            value={dataLogin?.password}
            onChange={changeInput}
          />
        </div>
        <button
          type="submit"
          className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
        >
          Continue
        </button>
      </form>

      <p className="forget-password underline inline ml-[79%] text-[14px]">
        Forget Password
      </p>

      <div className="flex items-center">
        <hr className="w-[45%]" />
        <p className="text-darkGrey pl-5 pr-5">or</p>
        <hr className="w-[45%]" />
      </div>

      {/* Google Button */}
      <button
        type="button"
        id="signInBtn"
        className="bg-white border text-black rounded-xl h-[6vh] flex justify-center items-center gap-5 hover:border-gray-900"
        onClick={handleCallbackResponse}
      >
        <GoogleLogo />
        Continue with Google
      </button>
    </div>
  );
}

export default LoginForm;
