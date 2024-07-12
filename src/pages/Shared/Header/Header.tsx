import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  const menuItems = (
    <>
      <li className='font-semibold'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
          Home
        </NavLink>
      </li>
      <li className='font-semibold'>
        <NavLink
          to='/products'
          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
          Products
        </NavLink>
      </li>
      <li className='font-semibold'>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
          About Us
        </NavLink>
      </li>
      <li className='font-semibold'>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
          Contact Us
        </NavLink>
      </li>
      <li className='font-semibold'>
        <NavLink
          to='/product-management/dashboard'
          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
          Product Management
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='relative overflow-hidden h-9 mt-3'>
        <div className='absolute top-0 right-0 w-full bg-white'>
          <div className='whitespace-nowrap animate-scrolling'>
            <p className='text-lg font-semibold text-black'>
              Please check your tracking frequently!
            </p>
          </div>
        </div>
      </div>
      <div className='navbar h-16 mt-2 bg-gradient-to-r from-slate-300 to-green-300 mx-auto flex justify-between items-center px-4 z-20'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='font-bold'>
            <img
              className='h-[60px]'
              src={logo}
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='navbar-center flex-grow flex justify-center'>
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='dropdown lg:hidden relative'>
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
              className='menu menu-compact dropdown-content z-20 p-2 shadow bg-base-100 rounded-box w-56 absolute right-0 left-auto'>
              {menuItems}
            </ul>
          </div>
          <div className='hidden lg:block text-xl mr-4'>
            <ul className='flex gap-5'>
              <li>
                <NavLink
                  to='/cart'
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500' : ''
                  }>
                  <FaShoppingCart size={24} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
