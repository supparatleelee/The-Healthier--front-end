import Payment from '../../features/payment/Payment';

function PackageItem({ item }) {
  function formatItemName(item) {
    if (item.name === 'Basic7Days') {
      return 'Basic 7 Days';
    } else if (item.name === 'Basic15Days') {
      return 'Basic 15 Days';
    } else if (item.name === 'Basic30Days') {
      return 'Basic 30 Days';
    } else if (item.name === 'Intermediate7Days') {
      return 'Intermediate 7 Days';
    } else if (item.name === 'Intermediate15Days') {
      return 'Intermediate 15 Days';
    } else if (item.name === 'Intermediate30Days') {
      return 'Intermediate 30 Days';
    } else if (item.name === 'Advance7Days') {
      return 'Advance 7 Days';
    } else if (item.name === 'Advance15Days') {
      return 'Advance 15 Days';
    } else if (item.name === 'Advance30Days') {
      return 'Advance 30 Days';
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between bg-white shadow-allSides rounded-xl p-6 w-96 text-center gap-10">
        <h2 className="font-semibold text-[20px]">{formatItemName(item)}</h2>

        <div className="font-medium flex flex-col gap-3">
          <h3>{item.price + ' THB'}</h3>
          <h3>{item.duration + ' Days'}</h3>
        </div>

        <div className="flex flex-col gap-3 text-[18px]">
          <p>[Feature 1]</p>
          <p>[Feature 1]</p>
          <p>[Feature 1]</p>
        </div>

        {/* <button
          onClick={handlePayment}
          type="button"
          className="bg-primary rounded-xl pt-3 pb-3 pl-5 pr-5 text-white hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
        
        >
          Make a payment
        </button> */}
        <Payment currentPrice={item.price} id={item.id} />
      </div>
    </>
  );
}

export default PackageItem;
