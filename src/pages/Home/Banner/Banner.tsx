import banner from '../../../assets/images/images.jpg';
import banner1 from '../../../assets/images/iamge1.avif';
import { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banner, banner1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='carousel w-full custom h-[500px]'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            currentSlide === index ? 'block' : 'hidden'
          }`}>
          <img
            src={slide}
            alt='keyboard'
            className='rounded-xl w-full h-full'
          />
          <div className='absolute transform top-2/3 left-16 text-center text-white bg-blue-900 bg-opacity-70 p-3'>
            <h1 className='text-lg md:text-2xl lg:text-4xl mb-3 font-semibold'>
              {index === 0
                ? 'Welcome to Our Website'
                : 'Find your dream Mechanical keyboards'}
            </h1>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href='#'
              onClick={() =>
                setCurrentSlide(
                  (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
                )
              }
              className='btn btn-accent mr-5'>
              ❮
            </a>
            <a
              href='#'
              onClick={() =>
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
              }
              className='btn btn-accent'>
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
