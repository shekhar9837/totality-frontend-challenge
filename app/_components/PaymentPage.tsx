'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const router = useRouter();

  const handlePayment = () => {
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

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      
      <div className="border p-4 rounded mb-6">
        <h3 className="text-lg font-semibold">Fake Payment Method</h3>
        <p className="text-gray-500">This is a fake payment method for testing purposes.</p>
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
