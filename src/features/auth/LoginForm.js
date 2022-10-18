import { GoogleLogo } from '../../components/icons';

function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Password"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
        >
          Continue
        </button>
      </form>

      <p className="forget-password underline inline ml-96 text-[14px]">
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
        className="bg-white border text-black rounded-xl h-[6vh] flex justify-center items-center gap-5 hover:border-gray-900"
      >
        <GoogleLogo />
        Continue with Google
      </button>
    </div>
  );
}

export default LoginForm;
