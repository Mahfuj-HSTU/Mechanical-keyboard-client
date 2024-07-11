import { FaHeart, FaKeyboard, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className='max-w-4xl bg-white p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mt-8'>
      <h2 className='text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
        Why Choose Us?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
        <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <FaHeart className='text-5xl text-red-500 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2'>Passion</h3>
          <p className='text-gray-700'>
            Our love for mechanical keyboards drives us to offer the best
            products and services.
          </p>
        </div>
        <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <FaKeyboard className='text-5xl text-blue-500 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2'>Expertise</h3>
          <p className='text-gray-700'>
            Our team consists of knowledgeable enthusiasts with years of
            experience.
          </p>
        </div>
        <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <FaUsers className='text-5xl text-green-500 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2'>Community</h3>
          <p className='text-gray-700'>
            We value our community and strive to provide exceptional customer
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
