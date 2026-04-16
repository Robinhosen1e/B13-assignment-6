import React from 'react';
import { use } from 'react';
import CartInfo from './CartInfo';
// import { useState } from 'react';
import Cartes from '../Cart (2)/Cartes';

const Cart = ({CartPromises , setSelectedCart , selectedCart , isProducts , setNonProducts}) => {


    console.log(isProducts , setNonProducts);

    const cartData = use(CartPromises);
    console.log(cartData);

   
    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-7/12 mx-auto text-center items-center justify-center'>
                <div>
                     <h1 className='font-bold text-5xl mb-2.5'>Premium Digital Tools</h1>
                       <p className='text-[#627382] text-[16px] my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
                </div>
                <div className='mb-10 mt-8 bg-white border-2 border-gray-100 rounded-3xl max-w-[194px] mx-auto'>
                
                    <button onClick={() => setNonProducts('Products')} className={`btn px-[16px] font-normal ${isProducts === 'Products' ?
                         "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-blue-600"} 
                         font-bold btn border-none rounded-3xl mr-4 `}>Products</button>
                    <button onClick={() => setNonProducts('cart')} className={`btn font-normal ${isProducts === 'cart' ?
                         "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-blue-600"} 
                         font-bold btn border-none rounded-3xl `}>Cart ({selectedCart.length})</button>
                </div>
            </div>
            {
                isProducts === 'Products' ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-11 w-10/12 mx-auto mb-32'>
                {
                     cartData.map(carts => <CartInfo key={carts.id} carts={carts} setSelectedCart={setSelectedCart} selectedCart={selectedCart} ></CartInfo>) 
                     
                }
            </div> : <div> <Cartes selectedCart={selectedCart} setSelectedCart={setSelectedCart} cartData={cartData} ></Cartes> </div>
            }
        </div>
    );
};

export default Cart;