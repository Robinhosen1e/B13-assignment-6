import React from 'react';
import { useState } from 'react';
import Nav from './nav';
import { Menu, X } from 'lucide-react';

const navData = [
  {
    id: 1,
    name: "Products",
    path: "/products"
  },
  {
    id: 2,
    name: "Features",
    path: "/features"
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/testimonials"
  },
  {
    id: 5,
    name: "FQA",
    path: "/fqa"
  }
];
const Nevber = () => {
  const [open , setOpen]= useState(false);

  const links =  navData.map(route => <Nav key={route.id} route={route}></Nav>)
    return (
//   <div className='relative'>
//           <div className="navbar bg-base-100 shadow-sm py-5 px-8 sticky top-0 ">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-100 p-2 shadow">
//         <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Products</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Features</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Pricing</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>Testimonials</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer text-[30px] font-semibold'><a>FAQ</a></li>
//       </ul>
//     </div>
//     <a className=" text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="gap-6 menu-horizontal px-1">
//       <li className='hover:text-[#4F39F6] cursor-pointer'><a>Products</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer '><a>Features</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer'><a>Pricing</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer'><a>Testimonials</a></li>
//       <li className='hover:text-[#4F39F6] cursor-pointer'><a>FAQ</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <div className='relative'>
       
//         <h1 className='absolute ml-10 -mt-2 bg-[#4F39F6] px-2.5 rounded-full text-white'>0</h1>
//         <div className='btn rounded-full p-4'><ShoppingCartIcon /></div>
//     </div>
//     <a className=" cursor-pointer  ml-5">Login</a>
//     <a className="cursor-pointer btn py-4 rounded-full ml-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-[16px]">Get Started</a>
//   </div>
// </div>
//   </div>

     <nav className='flex justify-between mx-7 mt-7'>

            <span className='flex items-center' onClick={()=> setOpen(!open)}>
              {
              open ? 
              <X className='md:hidden'></X> : 
                 <Menu className='md:hidden'></Menu>
              }
              <ul className={`md:hidden absolute duration-1000
                 ${open ? 'top-14' : '-top-70'} bg-blue-500`}>
                {links}
              </ul>
              
              <h1 className='text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital</h1>
            </span>

            <ul className='md:flex gap-8 hidden' >
                
            {
              links
            }

            </ul>





            {/* <ul className='flex gap-8 justify-center'>
                {
                    navData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}



            {/* <ul>
                <li><a href="">Home</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="./blog">Blog</a></li>
            </ul> */}

            <button>Get Start</button>
        </nav>

    );
};

export default Nevber;