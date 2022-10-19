import {
  // FemaleBlack,
  FemaleWhite,
  // MaleBlack,
  MaleWhite,
} from '../../components/icons';

function QuestionOne() {
  return (
    <div className="text-center mt-16">
      <h1 className="font-semibold text-[20px]">Gender</h1>

      <div className="flex justify-center gap-52 mt-28">
        <button className="male-choice bg-primary rounded-xl pl-20 pr-20 pt-14 pb-14 border text-white text-[20px] border-primary hover:text-black hover:border hover:border-primary hover:bg-white shadow-lg flex flex-col gap-8">
          <MaleWhite />
          {/* <MaleBlack /> */}
          <p>Male</p>
        </button>

        <button className="female-choice bg-primary rounded-xl pl-20 pr-20 pt-14 pb-14 text-white text-[20px] border border-primary hover:text-black hover:border hover:border-primary hover:bg-white shadow-lg flex flex-col gap-8">
          <FemaleWhite />
          {/* <FemaleBlack /> */}
          <p>Female</p>
        </button>
      </div>
    </div>
  );
}

export default QuestionOne;
