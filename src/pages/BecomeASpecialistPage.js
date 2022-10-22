import { useNavigate } from 'react-router-dom';

function BecomeASpecialistPage() {
  const navigate = useNavigate();

  return (
    <div className="h-[86vh] w-screen bg-specialist-landing-page bg-no-repeat bg-cover">
      <div className="mt-32 inline-block w-[40%] ml-[86px]">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-[50px] text-primary">
            BECOME OUR SPECIALIST AND TEACH WITH US
          </h1>
          <p className="font-['lato'] font-medium text-[18px]">
            Become a specialist and change lives — including your own
          </p>

          <div>
            <button
              className="bg-primary text-white pl-[40px] pr-[40px] pt-3 pb-3 rounded-lg hover:bg-secondary"
              onClick={() => navigate('/specialist-view')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeASpecialistPage;
