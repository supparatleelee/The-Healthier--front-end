function PackageItem() {
  return (
    <div className="flex flex-col justify-between bg-white shadow-allSides rounded-xl p-6 w-96 text-center gap-10">
      <h2 className="font-semibold text-[20px]">Basic</h2>

      <div className="font-medium flex flex-col gap-3">
        <h3>300THB</h3>
        <h3>15 Days</h3>
      </div>

      <div className="flex flex-col gap-3 text-[18px]">
        <p>[Feature 1]</p>
        <p>[Feature 1]</p>
        <p>[Feature 1]</p>
      </div>

      <button className="bg-primary rounded-xl pt-3 pb-3 pl-5 pr-5 text-white hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]">
        Make a payment
      </button>
    </div>
  );
}

export default PackageItem;
