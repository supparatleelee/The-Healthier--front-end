import { useNavigate } from 'react-router-dom';

function QuestionStatus() {
  const navigate = useNavigate();

  return (
    <div className="border-l-[1px] border-lightGrey w-full h-full flex justify-between items-center">
      <p className="pl-5">Question 1 out of 4</p>

      <button
        type="button"
        className="font-medium pt-1 pb-1 pl-5 pr-5 border border-white rounded-xl hover:border hover:border-black"
        onClick={() => navigate('/')}
      >
        Exit
      </button>
    </div>
  );
}

export default QuestionStatus;
