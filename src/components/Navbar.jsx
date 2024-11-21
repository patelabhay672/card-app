import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  return (
    <nav className='bg-gray-950 p-4'>
      <h1 className='text-wrap text-2xl mb-4'>Navigation</h1>
      <ul className='flex space-x-20'>
        <li>
          <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
        </li>
        <li>
          <Link to="/about" className='text-white hover:text-gray-300'>About</Link>
        </li>
        <li>
          <Link to="/login" className='text-white hover:text-gray-300'>Login</Link>
        </li>
        <li className='relative'>
          <Link to="/shopingcart" className='text-white hover:text-gray-300'>
            <i className="fa fa-cart-plus text-xl" aria-hidden="true"></i>
            {cart.length > 0 && (
              <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -mt-2 -mr-2'>
                {cart.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
