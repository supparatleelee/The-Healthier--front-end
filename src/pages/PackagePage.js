import Payment from '../features/payment/Payment';
import PackageItem from '../components/ui/PackageItem';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/ui/Modal';
import { payment, thunkGetPackage } from '../reduxStore/Payment';
import { useEffect } from 'react';

function PackagePage() {
  const state = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  // dispatch(thunkGetPackage());
  // console.log(state.packages);

  useEffect(() => {
    dispatch(thunkGetPackage());
  }, [dispatch]);

  return (
    <>
      <div className="mt-10 ml-[86px] mr-[100px]">
        <h1 className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
          Package
        </h1>

        <p className="text-darkGrey text-[18px] mt-5">
          Buy The Healthier Package in order to get the best experience from
          this platform!
        </p>

        <div className="package-container flex gap-3 mt-10 justify-between flex-wrap mb-10">
          {state.packages.map((item, index) => (
            <PackageItem key={index} item={item} />
          ))}
        </div>
      </div>
      <Modal
        title="Payment"
        modalOpen={state.isshowPayment}
        onModalClose={() => dispatch(payment(false))}
      >
        <Payment />
      </Modal>
    </>
  );
}

export default PackagePage;
