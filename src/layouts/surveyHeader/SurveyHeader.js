import Logo from '../header/Logo';
import QuestionStatus from './QuestionStatus';

function SurveyHeader() {
  return (
    <>
      <nav className="bg-white h-16 bg-opacity-20 w-screen backdrop-blur-xl fixed pr-[100px] shadow-lg">
        <div className="flex justify-between h-full items-center">
          <Logo />
          <QuestionStatus />
        </div>

        <div className="progress-bar w-screen bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] h-1.5"
            style={{ width: '45%' }}
          ></div>
        </div>
      </nav>
    </>
  );
}

export default SurveyHeader;
