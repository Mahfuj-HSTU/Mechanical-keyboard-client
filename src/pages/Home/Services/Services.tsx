import { FaShippingFast } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { MdOutlinePayments } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';

const services = [
  {
    title: 'Free Shipping',
    description: 'Order Over 500$',
    image: <FaShippingFast />,
  },
  {
    title: 'Big Cashback',
    description: 'Over 30% discount',
    image: <BsCashCoin />,
  },
  {
    title: 'Quick Payment',
    description: '100% Secure payment',
    image: <MdOutlinePayments />,
  },
  {
    title: '24/7 Support',
    description: 'Ready for you',
    image: <TiMessages />,
  },
];

const cardColors = [
  'bg-orange-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-cyan-500',
];

const Services = () => {
  return (
    <div className='mt-7 mb-9 shadow-xl shadow-slate-300 p-7 rounded-lg'>
      <h2 className='text-center px-4 py-6  text-5xl rounded-xl mx-3 font-semibold mb-5'>
        Services we provide
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className={`card w-72 text-white shadow-xl text-start ${cardColors[index]}`}>
            <div className='text-[80px]'>
              <figure className='pt-6'>{service.image}</figure>
            </div>
            <div className='card-body'>
              <h2 className='card-title'>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
