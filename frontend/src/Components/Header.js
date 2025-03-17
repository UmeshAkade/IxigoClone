import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaTags, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='bg-white border-b shadow px-4 py-3 flex justify-between items-center'>
      {/* Logo */}
      <div className='flex items-center'>
        <div className='text-3xl font-bold text-white bg-orange-500 px-4 py-1.5 ml-2 rounded'>
          ixigo
        </div>
      </div>

      {/* Right Section - Offers, Customer Service, Login/Signup */}
      <div className='flex items-center space-x-6'>
        {/* Offers */}
        <a
          className='flex items-center text-gray-700 hover:text-black text-sm'
          href='#'
        >
          <FaTags className='mr-1 text-gray-500 text-base' />
          Offers
        </a>

        {/* Customer Service */}
        <a
          className='flex items-center text-gray-700 hover:text-black text-sm'
          href='#'
        >
          <FaHeadset className='mr-1 text-gray-500 text-base' />
          Customer Service
        </a>

        {/* Login/Signup */}
        <div 
          className='flex items-center space-x-2 cursor-pointer'
          onClick={() => navigate('/login')}
        >
          <div className='bg-blue-100 p-1 rounded-full'>
            <AiOutlineUser className='w-5 h-5 text-blue-600' />
          </div>
          <span className='text-sm font-medium text-gray-700'>
            Log in/Sign up
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
