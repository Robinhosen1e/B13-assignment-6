import React from 'react';
import Img from '../assets/user.png'
import Img2 from '../assets/package.png'
import Img3 from '../assets/rocket.png'

const GrideAccountCreate = () => {
    return (
        <div className='py-36 bg-[#d7dae03f]'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl mb-3'>Get Started in 3 Steps</h1>
                <p className='text-[12px] text-[#627382]  font-light'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 w-10/12 mx-auto'>
                <div className='px-5 pt-5 pb-12 bg-white text-center items-center justify-items-center mr-4 rounded-2xl'>
                    <div className='relative -mr-70'>
                        <h1 className='absolute text-white px-[8px] py-[6px] text-xs bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl '>01</h1>
                    </div>
                    <div className='mt-15 p-5 bg-[#9214f333] rounded-full mb-8'><img src={Img} alt="" /></div>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Create Account</h1>
                        <p className='text-[14px] text-[#627382] mb-13'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className='px-5 pt-5 pb-12 bg-white text-center items-center justify-items-center mr-4 rounded-2xl'>
                    <div className='relative -mr-70'>
                        <h1 className='absolute text-white px-[8px] py-[6px] text-xs bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl '>02</h1>
                    </div>
                    <div className='mt-15 p-5 bg-[#9214f333] rounded-full mb-8'><img src={Img2} alt="" /></div>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Choose Products</h1>
                        <p className='text-[14px] text-[#627382] mb-13'>Browse our catalog and select the tools <br /> that fit your needs. </p>
                    </div>
                </div>
                <div className='px-5 pt-5 pb-12 bg-white text-center items-center justify-items-center mr-4 rounded-2xl'>
                    <div className='relative -mr-70'>
                        <h1 className='absolute text-white px-[8px] py-[6px] text-xs bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl '>03</h1>
                    </div>
                    <div className='mt-15 p-5 bg-[#9214f333] rounded-full mb-8'><img src={Img3} alt="" /></div>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Start Creating</h1>
                        <p className='text-[14px] text-[#627382] mb-13'>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrideAccountCreate;