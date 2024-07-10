import React from 'react';
import logitechImg from '../../../assets/images/logitech.png';
import duckyImg from '../../../assets/images/ducky.png';
import hyperXImg from '../../../assets/images/HyperX.png';
import filcoImg from '../../../assets/images/filco.png';
import varmiloImg from '../../../assets/images/varmilo.png';
import corsairImg from '../../../assets/images/corsair.png';

const FeaturedBrands = () => {
  const brands = [
    {
      title: 'Logitech',
      img: logitechImg,
    },
    {
      title: 'Ducky',
      img: duckyImg,
    },
    {
      title: 'HyperX',
      img: hyperXImg,
    },
    {
      title: 'Filco',
      img: filcoImg,
    },
    {
      title: 'Varmilo',
      img: varmiloImg,
    },
    {
      title: 'Corsair',
      img: corsairImg,
    },
  ];

  return (
    <div className='my-10'>
      <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
        Featured Brands
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
        {brands.map((brand, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300'>
            <img
              src={brand.img}
              alt={brand.title}
              className='w-24 h-24 object-contain mb-4'
            />
            <h2 className='text-xl font-semibold text-gray-700'>
              {brand.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
