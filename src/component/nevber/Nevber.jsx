import { ShoppingCartIcon } from 'lucide-react';
import React from 'react';

const Nevber = () => {
    return (
  <div className='relative'>
          <div className="navbar bg-base-100 shadow-sm py-5 px-8 sticky top-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-100 p-2 shadow">
        <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Products</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Features</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Pricing</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Testimonials</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>FAQ</a></li>
      </ul>
    </div>
    <a className=" text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-6 menu-horizontal px-1">
      <li className='hover:text-[#4F39F6] cursor-pointer text-[16px] font-semibold'><a>Products</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[16px] font-semibold'><a>Features</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[16px] font-semibold'><a>Pricing</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[16px] font-semibold'><a>Testimonials</a></li>
      <li className='hover:text-[#4F39F6] cursor-pointer text-[16px] font-semibold'><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className='relative'>
       
        <h1 className='absolute ml-10 -mt-2 bg-[#4F39F6] px-2.5 rounded-full text-white'>0</h1>
        <div className='btn rounded-full p-4'><ShoppingCartIcon /></div>
    </div>
    <a className=" cursor-pointer  ml-5">Login</a>
    <a className="cursor-pointer btn py-4 rounded-full ml-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-[16px]">Get Started</a>
  </div>
</div>
  </div>
    );
};

export default Nevber;