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
      <div className="flex flex-col justify-between bg-white shadow-allSides rounded-xl p-6 w-[32%] mb-3 text-center gap-10">
        <h2 className="font-semibold text-[20px]">{formatItemName(item)}</h2>

        <div className="font-medium flex flex-col gap-3">
          <h3>{item.price + ' THB'}</h3>
          <h3>{item.duration + ' Days'}</h3>
        </div>

        <div className="flex flex-col gap-3 text-[18px]">
          <p>
            {formatItemName(item).toLowerCase().includes('advance')
              ? 'Booking 3 Specialist'
              : formatItemName(item).toLowerCase().includes('intermediate')
              ? 'Booking 2 Specialists'
              : 'Booking 1 Specialists'}
          </p>
        </div>

        <Payment currentPrice={item.price} id={item.id} />
      </div>
    </>
  );
}

export default PackageItem;
