import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white text-start py-10'>
      <footer className='bg-white dark:bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl'>
          <div className='grid grid-cols-2 gap-8 px-2 py-1 lg:py-1 md:grid-cols-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Useful Pages
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    to=''
                    className=' hover:underline'>
                    About HSTU
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    Exam Results
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    HSTU Wikipedia
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to=''
                    className='hover:underline'>
                    Admin Bodies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Campus
              </h2>
              <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    News and Events
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Medical
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Library
                  </Link>
                </li>
                <li class='mb-4'>
                  <Link
                    to=''
                    class='hover:underline'>
                    Muktijuddho corner
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
                    Phone: +880-531-61355
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
