import React, { useState } from 'react';
import Feature from './feature';
import { toast } from 'react-toastify';
// import { use } from 'react';

const CartInfo = ({carts , selectedCart , setSelectedCart}) => {

    const [isSelected , setIsSelected] = useState(false)
    const handle = () => {
  toast(`${carts.name} is Selected`);
  setIsSelected(true);

   setSelectedCart([...selectedCart , carts]);
};
    const { 
    icon, 
    tag, 
    description, 
    features, 
    price, 
    period, 
    name 
  } = carts || {};
    // const carted =  use(carts);
    // console.log(carts);
    return (
        <div className='p-6 inset-shadow-2xs border border-gray-300 rounded-2xl'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <img className=' mt-7 p-3 rounded-full border-2 border-gray-200' src={icon} alt="" />
                </div>

                <p className={`${tag === 'Best Seller' ? 
                    'text-[#BB4D00] bg-[#FEF3C6]' : 
                    'bg-[#DBFCE7] text-[#0A883E]'} 
                     rounded-4xl  text-14 font-medium py-1.5 px-3  -mt-8`}>{tag}</p>
            </div>
            <div>
                <h1 className='mt-9 font-bold text-2xl text-[#101727] mb-3'>{name}</h1>
                <p className='text-[#627382] leading-5 text-[16px] mb-5'>{description}</p>
            </div>
            <div className='flex'>
                <h1 className='text-[#101727] text-2xl font-bold'>${price}</h1>
                <p className='text-[#627382] mt-2'>/{period}</p>
            </div>
            <div className='mt-4 mb-6'>
                {
                    features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <div>
                <button onClick={handle}  className='btn py-7 w-full text-[16px] font-bold text-white rounded-3xl 
                bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>{isSelected === true ? 'Added to card ' : 'Buy Now'}</button>
            </div>
        </div>
    );
};

export default CartInfo;  