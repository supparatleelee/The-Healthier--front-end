import React from 'react';
import Script from 'react-load-script';

import * as paymentService from '../../api/paymentApi';

import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import toastDisplaySuccess from '../../Toast/toastDisplaySuccess';

function Payment({ currentPrice, id }) {
  let OmiseCard;

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: 'pkey_test_5thy3uqew8mlqlbv1zr',
      currency: 'thb',
      frameLabel: 'xxxxxx',
      submitLabel: 'Pay NOW',
      buttonLabel: 'Pay with Omise',
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton('#credit-card');
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: currentPrice * 100,
      onCreateTokenSuccess: async (token) => {
        try {
          const res = await paymentService.payment({
            packageId: id,
            payment: 'Omise',
            currentPrice: currentPrice * 100,
            token: token,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          toastDisplaySuccess('Payment');
        } catch (err) {
          toastDisplayFailed(err.response.data.message);
        }
      },
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      creditCardConfigure();
      omiseCardHandler();
    } catch (err) {}
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />

        <form id="checkoutForm" onClick={handleClick}>
          <button
            type="button"
            className="bg-primary rounded-xl pt-3 pb-3 pl-5 pr-5 text-white hover:bg-gradient-to-r hover:from-[#DE8443] hover:to-[#B3683C]"
            id="credit-card"
          >
            Make a payment
          </button>
        </form>
      </div>
    </>
  );
}

export default Payment;
