function SurveyFooter() {
  return (
    <div className="bg-white h-20 bg-opacity-20 w-screen backdrop-blur-xl fixed pl-[90px] pr-[100px] shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.3)] flex justify-between items-center bottom-0">
      <button
        type="button"
        className="text-primary font-medium border border-primary pt-1 pb-1 pl-5 pr-5 rounded-lg hover:text-white hover:bg-primary"
      >
        Back
      </button>
      <button
        type="button"
        className="text-primary font-medium border border-primary pt-1 pb-1 pl-5 pr-5 rounded-lg hover:text-white hover:bg-primary"
      >
        Continue
      </button>
    </div>
  );
}

export default SurveyFooter;
