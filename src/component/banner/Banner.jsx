import { Circle, Disc } from 'lucide-react';
import bannerImg from '../assets/banner.png'
import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center justify-center my-20'>
            <div className='max-w-[700px]'>
                
                <div className='bg-[#E1E7FF] pl-4 py-2 max-w-[285px] text-nowrap rounded-4xl flex gap-1.5 items-center'>
                    <span><Circle size={19} color="#540dbf" strokeWidth={3} /></span>
                    <span className='bg-[#E1E7FF] text-left font-medium text-[16px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'> New: AI-Powered Tools Available</span>
                </div>
                <h1 className='font-extrabold text-6xl py-5 text-[#101727] opacity-90 leading-18'>Supercharge Your Digital Workflow</h1>
                <p className='text-[#627382] text-[18px] leading-8 mb-9'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
                <div className='gap-8'>
                    <button className='cursor-pointer btn  rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-[16px] py-[25px] mr-6'>Explore Products</button>
                    <button className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#4F39F6]  cursor-pointer btn  rounded-full font-semibold text-[16px] py-[25px] border'>Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;