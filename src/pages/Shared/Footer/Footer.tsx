import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white text-start py-10'>
      <footer className='bg-white dark:bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl'>
          <div className='grid grid-cols-2 gap-8 px-2 py-1 lg:py-1 md:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Useful Pages
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    to='/'
                    className=' hover:underline'>
                    Home
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/about'
                    className='hover:underline'>
                    About
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/contact'
                    className='hover:underline'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Social Media
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    to='https://www.facebook.com/mahfuj.rahman.18007'
                    className='hover:underline'>
                    Facebook
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='https://www.instagram.com/mahfuj.shb/?fbclid=IwZXh0bgNhZW0CMTAAAR2FCDTNoNDCyGgRoj46_OH1CMpz5aw7u_brlItFNboQY9IM-Kb36IU7ab8_aem_V1vD2MAvB5LxOnqlpkw2Hg'
                    className='hover:underline'>
                    Instagram
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='https://www.linkedin.com/in/r-mahfuj/'
                    className='hover:underline'>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Contact
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    Hajee Mohammad Danesh Science and Technology University
                    (HSTU),
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    Dinajpur-5200, Bangladesh
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    Phone: +8801793949008
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
