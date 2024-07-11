import about from '../../assets/images/about.jpg';
import WhyChooseUs from './WhyChooseUs';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6'>
      <div className='max-w-4xl bg-white p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
        <h1 className='text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
          About Us
        </h1>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <img
              src={about}
              alt='About Us'
              className='rounded-lg shadow-lg mb-6 md:mb-0'
            />
          </div>
          <div className='md:w-1/2 md:pl-6'>
            <p className='text-gray-700 text-lg mb-4'>
              Welcome to Mechanical Keyboards! We are passionate about providing
              the best mechanical keyboards to enhance your typing experience.
              Our mission is to bring you high-quality products with exceptional
              customer service.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              Our team consists of keyboard enthusiasts who understand the
              importance of a reliable and enjoyable typing experience. Whether
              you are a gamer, a programmer, or just someone who appreciates a
              good keyboard, we have something for you.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              We believe in the power of customization, and we offer a wide
              range of options to help you create your perfect keyboard setup.
              From keycaps to switches, we have it all.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              Thank you for choosing Mechanical Keyboards. We look forward to
              serving you!
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default About;
