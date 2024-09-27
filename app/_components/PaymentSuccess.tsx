import Link from 'next/link';

const PaymentSuccess = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for your purchase.</p>
      
      <Link href="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
