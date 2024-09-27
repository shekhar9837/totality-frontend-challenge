'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const router = useRouter();

  const handlePayment = () => {
    if (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
      toast("Please fill in all the card details.");
      return;
    }

    setLoading(true);

    // Simulate payment process
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push('/payment-success');
      }, 2000);
    }, 1500); // Simulate delay for payment process
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto py-10 md:w-[50%] px-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="border p-4 rounded mb-6">
        <h3 className="text-lg font-semibold">Enter Card Details</h3>

        <div className="mt-4">
          <label className="block mb-2 text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            className="border px-3 py-2 w-full rounded"
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <div className="w-1/2">
            <label className="block mb-2 text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              className="border px-3 py-2 w-full rounded"
              placeholder="MM/YY"
              maxLength={5}
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              className="border px-3 py-2 w-full rounded"
              placeholder="123"
              maxLength={3}
              value={cardDetails.cvv}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className={`px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      {paymentSuccess && (
        <div className="mt-4 text-green-500">
          Payment successful! Redirecting...
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
