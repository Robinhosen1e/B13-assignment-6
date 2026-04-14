import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-[#101727] text-white '>
            <div className='w-10/12 mx-auto grid grid-cols-3 gap-4 justify-between py-30'>
                <div> 
                    <h1 className='text-4xl font-bold mb-2 '>DigiTools</h1>
                    <p className='text-xs text-[#ffffffc4]'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>

                <div className='grid grid-cols-3'>
                    <div>
                        <h1 className='text-xl mb-3'>Product</h1>
                        <ul>
                            <li className=' hover:text-blue-500 cursor-pointer  text-[14px] text-[#ffffffbe] mb-1.5'>Features</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Pricing</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Templates</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] '>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl mb-3'>Company</h1>
                        <ul>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>About</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5' >Blog</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Careers</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe]'>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl mb-3'>Resources</h1>
                        <ul>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Documentation</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Help Center</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe] mb-1.5'>Community</li>
                            <li className='text-[14px]  hover:text-blue-500 cursor-pointer text-[#ffffffbe]'>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='items-center justify-items-center'>
                    <h1 className='text-xl mb-3'>Social Links</h1>
                    <div className='flex gap-4'>
                        <span className='p-3 hover:bg-blue-400 cursor-pointer  bg-white rounded-full text-black'> <FaSquareFacebook  size={20} /> </span>
                        <span className='p-3 hover:bg-blue-400 cursor-pointer  bg-white rounded-full text-black'> <RiInstagramFill size={20} /> </span>
                        <span className='p-3 hover:bg-blue-400 cursor-pointer  bg-white rounded-full text-black'> <FaXTwitter size={20} /> </span>
                    </div>
                </div>
            </div>

            <div className='w-10/12 mx-auto'>
                <div className='pb-4 '>
                    <hr className='text-[#505052]' />
                </div>
                <div className='pb-10 text-[#c8cace] flex justify-between font-light text-xs'>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                    
                        <div className=' gap-3 flex'>
                            <p> Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;