import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  const menuItems = (
    <>
      {' '}
      <li className='font-semibold'>
        <Link to='/'>Home</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to='/'>Products</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to='/'>About Us</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to='/'>Contact Us</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to='/'>Product Management</Link>{' '}
      </li>
    </>
  );

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute top-0 right-0 p-3 w-full bg-white mb-4'>
        <div className='inline-block whitespace-nowrap animate-scrolling'>
          <p className='text-lg font-semibold'>
            Please check your tracking frequently!
          </p>
        </div>
      </div>
      <div className='navbar h-16 mt-12 bg-gradient-to-r from-slate-300 to-green-300 mx-auto flex justify-between items-center px-4'>
        <div className='navbar-start'>
          <div className='font-bold'>
            <img
              className='h-[60px]'
              src={logo}
              alt='logo'
            />
          </div>
        </div>
        <div className='navbar-center flex-grow flex justify-center'>
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='dropdown lg:hidden'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-56'>
              {menuItems}
            </ul>
          </div>
          <div className='hidden lg:block text-xl mr-4'>
            <ul className='flex gap-5'>
              <li>
                <Link to='/'>
                  <CgProfile size={24} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaShoppingCart size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
