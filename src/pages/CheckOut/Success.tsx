import success from '../../assets/images/images.png';
const Success = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white rounded-lg p-8 shadow-md max-w-lg w-full'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
          Your Order is Successfully Placed
        </h1>
        <p className='text-lg text-gray-700 mb-4'>
          Thank you for your order. We will process it shortly.
        </p>
        <img
          src={success}
          alt='Success Icon'
          className='mx-auto my-4 h-24'
        />
      </div>
    </div>
  );
};

export default Success;
