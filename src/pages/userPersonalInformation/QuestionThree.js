function QuestionThree() {
  return (
    <div className="text-center mt-16">
      <h1 className="font-semibold text-[20px]">Height & Weight</h1>

      <div className="flex flex-col justify-center gap-8 mt-28 ml-96 mr-96">
        <input
          type="number"
          className="rounded-xl w-full h-[6.2vh] border-none shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)]"
          placeholder="Height (cm)"
          name="height"
        />
        <input
          type="number"
          className="rounded-lg w-full h-[6.2vh] border-none shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)]"
          placeholder="Weight (kg)"
          name="weight"
        />
      </div>
    </div>
  );
}

export default QuestionThree;
