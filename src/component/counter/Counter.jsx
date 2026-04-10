import React from 'react';

const Counter = () => {
    return (
        <div className='mt-20 mb-30'>
            <div className='flex py-14 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] justify-center'>
                <div className='text-white border-r-2 pr-36 border-gray-400 text-center'>
                    <h1 className='font-extrabold text-6xl mb-3'>50K+</h1>
                    <p className='font-medium text-2xl'>Active Users</p>
                </div>
                <div className='text-white border-r-2 pr-36 pl-36 border-gray-400 text-center'>
                    <h1 className='font-extrabold text-6xl mb-3'>200+</h1>
                    <p className='font-medium text-2xl'>Premium Tools</p>
                </div>
                <div className='text-white  pl-36 text-center'>
                    <h1 className='font-extrabold text-6xl mb-3'>4.9</h1>
                    <p className='font-medium text-2xl'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Counter;