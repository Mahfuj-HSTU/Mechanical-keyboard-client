import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import GetInTouch from './GetInTuch';

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6'>
      <div className='max-w-4xl w-full'>
        <div className='bg-white p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mb-10'>
          <h1 className='text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
            Contact Us
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
              <FaPhone className='text-3xl text-green-500 mb-4 mx-auto' />
              <h2 className='text-xl font-bold mb-2'>Phone</h2>
              <p className='text-gray-700'>+1 234 567 890</p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
              <FaEnvelope className='text-3xl text-blue-500 mb-4 mx-auto' />
              <h2 className='text-xl font-bold mb-2'>Email</h2>
              <p className='text-gray-700'>contact@mechanicalkeyboards.com</p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
              <FaMapMarkerAlt className='text-3xl text-red-500 mb-4 mx-auto' />
              <h2 className='text-xl font-bold mb-2'>Address</h2>
              <p className='text-gray-700'>
                123 Keyboard Lane, Typing Town, TX
              </p>
            </div>
          </div>
        </div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Contact;
