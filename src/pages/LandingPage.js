function LandingPage() {
  return (
    <div className="mt-0 bg-landing-page h-screen bg-no-repeat bg-cover">
      <div className="mt-56 inline-block w-[40%] ml-[100px]">
        <div className="flex flex-col gap-8">
          <h1 className="font-['lato'] font-black text-[50px] text-primary">
            ACHIEVE YOUR DREAM BODY & HEALTH AT YOUR PLACE
          </h1>
          <p className="font-['lato'] font-medium text-[18px]">
            Meet your mentor online, train your body with appropriate &
            follow-up
          </p>

          <div>
            <button className="bg-primary text-white pl-[40px] pr-[40px] pt-3 pb-3 rounded-lg hover:bg-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
